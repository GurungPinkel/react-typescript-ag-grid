import { BaseColumn } from "../BaseColumn";
import { iColumnOptions } from "../iColumnOptions";

export class CityColumn extends BaseColumn {
  constructor(options?: iColumnOptions) {
    super(options);
    this.headerName = "City";
    this.field = "city";
  }
}
