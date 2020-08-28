import { BaseColumn } from "../BaseColumn";
import { iColumn } from "../iColumn";

import { ICellRendererComp, ICellRendererFunc } from "ag-grid-community";
import { iColumnOptions } from "../iColumnOptions";

export class AddressColumn extends BaseColumn {
  constructor(options?: iColumnOptions) {
    super(options);
    this.headerName = "Address";
    this.field = "address";
  }
}
