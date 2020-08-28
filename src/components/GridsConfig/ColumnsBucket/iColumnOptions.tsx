import { ICellRendererComp, ICellRendererFunc } from "ag-grid-community";

export interface iColumnOptions {
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
}
