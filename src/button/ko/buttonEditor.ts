import * as ko from "knockout";
import template from "./buttonEditor.html";
import { StyleService } from "@paperbits/styles";
import { HyperlinkModel } from "@paperbits/common/permalinks";
import { ButtonModel } from "../buttonModel";
import { Component, OnMounted, Param, Event } from "@paperbits/common/ko/decorators";

@Component({
    selector: "paperbits-button-editor",
    template: template,
    injectable: "buttonEditor"
})
export class ButtonEditor {
    public readonly label: ko.Observable<string>;
    public readonly hyperlink: ko.Observable<HyperlinkModel>;
    public readonly hyperlinkTitle: ko.Observable<string>;
    public readonly appearanceStyles: ko.ObservableArray<any>;
    public readonly appearanceStyle: ko.Observable<any>;
    public readonly sizeStyles: ko.ObservableArray<any>;
    public readonly sizeStyle: ko.Observable<any>;

    constructor(private readonly styleService: StyleService) {
        this.label = ko.observable<string>();
        this.appearanceStyles = ko.observableArray<any>();
        this.appearanceStyle = ko.observable<any>();
        this.sizeStyles = ko.observableArray<any>();
        this.sizeStyle = ko.observable<any>();
        this.hyperlink = ko.observable<HyperlinkModel>();
        this.hyperlinkTitle = ko.observable<string>();
    }

    @Param()
    public model: ButtonModel;

    @Event()
    public onChange: (model: ButtonModel) => void;

    @OnMounted()
    public async initialize(): Promise<void> {
        const buttonVariations = await this.styleService.getComponentVariations("button");

        this.appearanceStyles(buttonVariations.filter(x => x.category === "appearance"));
        this.sizeStyles(buttonVariations.filter(x => x.category === "size").concat({ displayName: "Default", key: undefined }));

        this.label(this.model.label);

        if (this.model.styles) {
            this.sizeStyle(this.model.styles.size);
            this.appearanceStyle(this.model.styles.appearance);
        }

        this.hyperlink(this.model.hyperlink);
        this.onHyperlinkChange(this.model.hyperlink);

        this.sizeStyle.subscribe(this.applyChanges);
        this.appearanceStyle.subscribe(this.applyChanges);
        this.label.subscribe(this.applyChanges);
        this.hyperlink.subscribe(this.applyChanges);
    }

    public onHyperlinkChange(hyperlink: HyperlinkModel): void {
        if (hyperlink) {
            this.hyperlinkTitle(hyperlink.title);
            this.hyperlink(hyperlink);
        }
        else {
            this.hyperlinkTitle("Add a link...");
        }
    }

    private applyChanges(): void {
        this.model.label = this.label();
        this.model.hyperlink = this.hyperlink();
        this.model.styles = {
            appearance: this.appearanceStyle(),
            size: this.sizeStyle()
        };

        this.onChange(this.model);
    }
}