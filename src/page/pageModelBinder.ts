import { PageModel } from "./pageModel";
import { IModelBinder } from "@paperbits/common/editing";
import { IPageService } from "@paperbits/common/pages";
import { IPermalinkService, IPermalink } from "@paperbits/common/permalinks";
import { IFileService } from "@paperbits/common/files/IFileService";
import { IRouteHandler } from "@paperbits/common/routing";
import { ModelBinderSelector } from "@paperbits/common/widgets";
import { Contract } from "@paperbits/common";
import { PlaceholderModel } from "@paperbits/common/widgets/placeholder";

export class PageModelBinder implements IModelBinder {
    private readonly pageService: IPageService;
    private readonly permalinkService: IPermalinkService;
    private readonly fileService: IFileService;
    private readonly routeHandler: IRouteHandler;
    private readonly modelBinderSelector: ModelBinderSelector;
    private pageNotFound: IPermalink;

    constructor(pageService: IPageService, permalinkService: IPermalinkService, fileService: IFileService, routeHandler: IRouteHandler, modelBinderSelector: ModelBinderSelector) {
        this.pageService = pageService;
        this.permalinkService = permalinkService;
        this.fileService = fileService;
        this.routeHandler = routeHandler;
        this.modelBinderSelector = modelBinderSelector;

        // rebinding...
        this.contractToModel = this.contractToModel.bind(this);
    }

    public canHandleWidgetType(widgetType: string): boolean {
        return widgetType === "page";
    }

    public canHandleModel(model: Object): boolean {
        return model instanceof PageModel;
    }

    public async contractToModel(pageContract, pageUrl: string, readonly?: boolean): Promise<any> {
        if (readonly) {
            return new PlaceholderModel(pageContract, "Page content");
        }

        if (!pageContract.key) {
            let permalink = await this.permalinkService.getPermalinkByUrl(pageUrl);

            if (!permalink) {
                permalink = await this.getPageNotFound();
            }

            const pageKey = permalink.targetKey;
            pageContract = await this.pageService.getPageByKey(pageKey);
        }

        const pageModel = new PageModel();
        pageModel.title = pageContract.title;
        pageModel.description = pageContract.description;
        pageModel.keywords = pageContract.keywords;

        const pageContentNode = await this.fileService.getFileByKey(pageContract.contentKey);
        const modelPromises = pageContentNode.nodes.map(async (config) => {
            let modelBinder = this.modelBinderSelector.getModelBinderByNodeType(config.type);
            return await modelBinder.contractToModel(config);
        });

        const models = await Promise.all<any>(modelPromises);
        pageModel.widgets = models;

        return pageModel;
    }

    private async getPageNotFound(): Promise<IPermalink> {
        if (!this.pageNotFound) {
            this.pageNotFound = await this.permalinkService.getPermalinkByUrl("/404");
        }
        return this.pageNotFound;
    }

    private isChildrenChanged(widgetChildren: any[], modelItems: any[]) {
        return (widgetChildren && !modelItems) ||
            (!widgetChildren && modelItems) ||
            (widgetChildren && modelItems && widgetChildren.length !== modelItems.length);
    }

    public modelToContract(pageModel: PageModel): Contract {
        const pageConfig: Contract = {
            object: "block",
            type: "page",
            nodes: []
        };
        pageModel.widgets.forEach(section => {
            const modelBinder = this.modelBinderSelector.getModelBinderByModel(section);
            pageConfig.nodes.push(modelBinder.modelToContract(section));
        });

        return pageConfig;
    }

    public async updateContent(pageModel: PageModel): Promise<void> {
        if (pageModel instanceof PlaceholderModel) {
            return;
        }

        let url = this.routeHandler.getCurrentUrl();
        let permalink = await this.permalinkService.getPermalinkByUrl(url);
        let pageKey = permalink.targetKey;
        let page = await this.pageService.getPageByKey(pageKey);
        let file = await this.fileService.getFileByKey(page.contentKey);
        let config = this.modelToContract(pageModel);

        Object.assign(file, config);

        await this.fileService.updateFile(file);
    }
}
