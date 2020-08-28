import { iColumn } from "../../Grid/iColumn";
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

  constructor(
    editable?: boolean,
    checkboxSelection?: boolean,
    enableCellChangeFlash?: boolean,
    cellRenderer?:
      | {
          new (): ICellRendererComp;
        }
      | ICellRendererFunc
      | string,
    valueGetter?: unknown
  ) {
    this.headerName = "";
    this.field = "";

    this.editable = editable;
    this.checkboxSelection = checkboxSelection;
    this.enableCellChangeFlash = enableCellChangeFlash;
    this.cellRenderer = cellRenderer;
    this.valueGetter = valueGetter;
  }
}
