import { iColumn } from "./iColumn";
import { iColumnOptions } from "./iColumnOptions";
import { ICellRendererComp, ICellRendererFunc } from "ag-grid-community";

export abstract class BaseColumn implements iColumn {
  headerName: string;
  field: string;
  editable?: boolean;
  checkboxSelection?: boolean;
  enableCellChangeFlash?: boolean;
  cellRenderer?:
    | {
        new (): ICellRendererComp;
      }
    | ICellRendererFunc
    | string;
  valueGetter?: any;

  constructor(options?: iColumnOptions) {
    this.headerName = "";
    this.field = "";

    this.editable = options?.editable;
    this.checkboxSelection = options?.checkboxSelection;
    this.enableCellChangeFlash = options?.enableCellChangeFlash;
    this.cellRenderer = options?.cellRenderer;
    this.valueGetter = options?.valueGetter;
  }

  protected setDefaultProp<T>(prop: T, defaultValue: T): T {
    if (prop === undefined || prop === null) {
      prop = defaultValue;
    }

    return prop;
  }
}
