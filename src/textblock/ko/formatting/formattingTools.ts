import * as ko from "knockout";
import template from "./formattingTools.html";
import * as Utils from "@paperbits/common/utils";
import { IEventManager } from "@paperbits/common/events";
import { IHtmlEditorProvider } from "@paperbits/common/editing/htmlEditorProvider";
import { IPermalinkService } from "@paperbits/common/permalinks";
import { IPageService } from "@paperbits/common/pages";
import { IRouteHandler } from "@paperbits/common/routing";
import { HtmlEditorEvents } from "@paperbits/common/editing";
import { Component } from "../../../ko/component";

@Component({
    selector: "formatting",
    template: template,
    injectable: "formattingTools"
})
export class FormattingTools {
    public bold: KnockoutObservable<boolean>;
    public italic: KnockoutObservable<boolean>;
    public underlined: KnockoutObservable<boolean>;
    public pre: KnockoutObservable<boolean>;
    public style: KnockoutObservable<string>;
    public styled: KnockoutObservable<boolean>;
    public alignment: KnockoutObservable<string>;
    public justified: KnockoutObservable<boolean>;
    public anchored: KnockoutObservable<boolean>;
    public size: KnockoutObservable<string>;
    public sized: KnockoutObservable<boolean>;
    public olName: KnockoutObservable<string>;
    public ol: KnockoutObservable<boolean>;
    public ulName: KnockoutObservable<string>;
    public ul: KnockoutObservable<boolean>;
    public font: KnockoutObservable<string>;

    constructor(
        private readonly htmlEditorProvider: IHtmlEditorProvider,
        private readonly eventManager: IEventManager,
        private readonly permalinkService: IPermalinkService,
        private readonly pageService: IPageService,
        private readonly routeHandler: IRouteHandler
    ) {
        this.updateFormattingState = this.updateFormattingState.bind(this);
        this.toggleUnorderedList = this.toggleUnorderedList.bind(this);

        this.style = ko.observable<string>();
        this.styled = ko.observable<boolean>();
        this.font = ko.observable<string>();
        this.sized = ko.observable<boolean>();
        this.ol = ko.observable<boolean>();
        this.ul = ko.observable<boolean>();
        this.bold = ko.observable<boolean>();
        this.italic = ko.observable<boolean>();
        this.underlined = ko.observable<boolean>();
        this.ul = ko.observable<boolean>();
        this.ol = ko.observable<boolean>();
        this.pre = ko.observable<boolean>();
        this.alignment = ko.observable<string>();
        this.anchored = ko.observable<boolean>();

        eventManager.addEventListener(HtmlEditorEvents.onSelectionChange, this.updateFormattingState);
    }

    private updateFormattingState(): void {
        const selectionState = this.htmlEditorProvider.getCurrentHtmlEditor().getSelectionState();

        this.bold(selectionState.bold);
        this.italic(selectionState.italic);
        this.underlined(selectionState.underlined);
        this.ul(selectionState.ul);
        this.ol(selectionState.ol);
        this.pre(selectionState.pre);
        this.alignment(selectionState.alignment || "left");
        this.font(selectionState.font || "serif");
        this.anchored(!!selectionState.anchorKey);

        if (selectionState.normal) {
            this.style("Normal");
        }
        else if (selectionState.h1) {
            this.style("Heading 1");
        }
        else if (selectionState.h2) {
            this.style("Heading 2");
        }
        else if (selectionState.h3) {
            this.style("Heading 3");
        }
        else if (selectionState.h4) {
            this.style("Heading 4");
        }
        else if (selectionState.h5) {
            this.style("Heading 5");
        }
        else if (selectionState.h6) {
            this.style("Heading 6");
        }
        else if (selectionState.quote) {
            this.style("Quote");
        }
        else if (selectionState.pre) {
            this.style("Code snippet");
        }
    }

    public toggleNn(): void {
        //this.htmlEditorProvider.getCurrentHtmlEditor().setList(this.intentions.container.list.nested_numbering);
        this.updateFormattingState();
    }

    public toggleBold(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleBold();
        this.updateFormattingState();
    }

    public toggleItalic(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleItalic();
        this.updateFormattingState();
    }

    // public setStyle(intention: Intention): void {
    //     this.htmlEditorProvider.getCurrentHtmlEditor().toggleIntention(intention);
    //     this.updateFormattingState();
    // }

    // public setSize(intention: Intention): void {
    //     this.htmlEditorProvider.getCurrentHtmlEditor().toggleIntention(intention);
    //     this.updateFormattingState();
    // }

    public clearStyle(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().resetToNormal();
        this.updateFormattingState();
    }

    public toggleUnderlined(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleUnderlined();
        this.updateFormattingState();
    }

    public toggleSize(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleSize();
        this.updateFormattingState();
    }

    public toggleOrderedList(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleOrderedList();
        this.updateFormattingState();
    }

    public toggleUnorderedList(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleUnorderedList();
        this.updateFormattingState();
    }

    public incIndent() {
        this.htmlEditorProvider.getCurrentHtmlEditor().increaseIndent();

        this.updateFormattingState();
    }
    public decIndent() {
        this.htmlEditorProvider.getCurrentHtmlEditor().decreaseIndent();

        this.updateFormattingState();
    }

    public async toggleAnchor(): Promise<void> {
        const htmlEditor = this.htmlEditorProvider.getCurrentHtmlEditor();
        const selectionState = htmlEditor.getSelectionState();
        const anchorKey = selectionState.anchorKey;
        const currentUrl = this.routeHandler.getCurrentUrl();
        const permalink = await this.permalinkService.getPermalinkByUrl(currentUrl);
        const pageContract = await this.pageService.getPageByKey(permalink.targetKey);

        if (!anchorKey) {
            const anchorId = Utils.slugify(htmlEditor.getSelectionText());
            const anchorPermalink = await this.permalinkService.createPermalink(`${anchorId}`, null, permalink.key);

            htmlEditor.setAnchor(anchorId, anchorPermalink.key);

            // TODO: Probably we should show dialog and allow users to enter anchor title.
            const anchorTitle = htmlEditor.getSelectionText();
            const anchors = pageContract.anchors || {};
            anchors[anchorPermalink.key.replaceAll("/", "|")] = anchorTitle;
            pageContract.anchors = anchors;

            await this.pageService.updatePage(pageContract);
        }
        else {
            this.htmlEditorProvider.getCurrentHtmlEditor().removeAnchor();
            await this.permalinkService.deletePermalinkByKey(anchorKey);

            if (pageContract.anchors) {
                pageContract.anchors[anchorKey.replaceAll("/", "|")] = null;
                await this.pageService.updatePage(pageContract);
            }
        }

        this.updateFormattingState();

        /*
            1. Create permalink and get its key;
            2. Add the key to "anchors" collection of a page;
            3. Invoke toggleCategory:
            
            this.htmlEditorProvider.getCurrentHtmlEditor().toggleCategory("anchorKey", "permalinks/abcdefgh", "block")

            Why we were talking about middlewares?
            - i.e. I deleted whole section along with H1 > show warning;
        */
    }

    public toggleH1(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleH1();
        this.updateFormattingState();
    }

    public toggleH2(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleH2();
        this.updateFormattingState();
    }

    public toggleH3(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleH3();
        this.updateFormattingState();
    }

    public toggleH4(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleH4();
        this.updateFormattingState();
    }

    public toggleH5(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleH5();
        this.updateFormattingState();
    }

    public toggleH6(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleH6();
        this.updateFormattingState();
    }

    public toggleQuote(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleQuote();
        this.updateFormattingState();
    }

    public toggleCode(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().toggleCode();
        this.updateFormattingState();
    }

    public toggleAlignLeft(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().alignLeft();
    }

    public toggleAlignCenter(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().alignCenter();
    }

    public toggleAlignRight(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().alignRight();
    }

    public toggleJustify(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().justify();
    }

    public resetToNormal(): void {
        this.htmlEditorProvider.getCurrentHtmlEditor().resetToNormal();
        this.updateFormattingState();
    }

    public dispose(): void {
        this.eventManager.removeEventListener(HtmlEditorEvents.onSelectionChange, this.updateFormattingState);
    }
}