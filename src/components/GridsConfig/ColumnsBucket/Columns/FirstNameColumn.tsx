import { BaseColumn } from "../BaseColumn";
import { iColumnOptions } from "../iColumnOptions";

export class FirstNameColumn extends BaseColumn {
  constructor(options?: iColumnOptions) {
    super(options);
    this.headerName = "First Name";
    this.field = "firstName";
  }
}
