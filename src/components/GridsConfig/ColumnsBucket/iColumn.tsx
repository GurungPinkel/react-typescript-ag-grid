import {
  ICellRendererComp,
  ICellRendererFunc,
} from "ag-grid-community";

export interface iColumn {
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
}
