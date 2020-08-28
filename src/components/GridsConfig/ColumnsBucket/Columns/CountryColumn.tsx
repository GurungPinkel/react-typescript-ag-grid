import { BaseColumn } from "../BaseColumn";
import { iColumnOptions } from "../iColumnOptions";

export class CountryColumn extends BaseColumn {
  constructor(options?: iColumnOptions) {
    super(options);
    this.headerName = "Country";
    this.field = "country";
  }
}
