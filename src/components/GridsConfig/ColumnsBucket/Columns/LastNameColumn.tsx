import { BaseColumn } from "../BaseColumn";
import { iColumnOptions } from "../iColumnOptions";

export class LastNameColumn extends BaseColumn {
  constructor(options?: iColumnOptions) {
    super(options);
    this.headerName = "Last Name";
    this.field = "lastName";
  }
}
