import { BaseColumn } from "../BaseColumn";
import { iColumnOptions } from "../iColumnOptions";

export class AddressColumn extends BaseColumn {

  constructor(options?: iColumnOptions) {
    super(options);
    this.headerName = "Address";
    this.field = "address";
    // one way to set a default value (opened for a discussion)
    this.editable = this.setDefaultProp(this.editable, true);
  }
}
