import { BaseColumn } from "../BaseColumn";
import { ICellRendererComp, ICellRendererFunc } from "ag-grid-community";

export class LastNameColumn extends BaseColumn {
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
    super(
      editable,
      checkboxSelection,
      enableCellChangeFlash,
      cellRenderer,
      valueGetter
    );
    this.headerName = "Last Name";
    this.field = "lastName";
  }
}
