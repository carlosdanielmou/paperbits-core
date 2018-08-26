import { PricingTableViewModel } from "./pricingTableViewModel";
import { IViewModelBinder } from "@paperbits/common/widgets";
import { PricingTableModel } from "../pricingTableModel";

export class PricingTableViewModelBinder implements IViewModelBinder<PricingTableModel, PricingTableViewModel> {
    public modelToViewModel(model: PricingTableModel, readonly: boolean, viewModel?: PricingTableViewModel): PricingTableViewModel {
        if (!viewModel) {
            viewModel = new PricingTableViewModel();
        }

        viewModel["widgetBinding"] = {
            displayName: "Pricing table",
            readonly: readonly,
            model: model,
            editor: "pricing-table-editor",
            applyChanges: () => {
                this.modelToViewModel(model, readonly, viewModel);
            }
        }

        return viewModel;
    }

    public canHandleModel(model: PricingTableModel): boolean {
        return model instanceof PricingTableModel;
    }
}