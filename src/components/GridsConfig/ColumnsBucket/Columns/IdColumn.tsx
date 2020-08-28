import { BaseColumn } from "../BaseColumn";
import { iColumnOptions } from "../iColumnOptions";

export class IdColumn extends BaseColumn {
  constructor(options?: iColumnOptions) {
    super(options);
    this.headerName = "ID";
    this.field = "id";
  }
}
