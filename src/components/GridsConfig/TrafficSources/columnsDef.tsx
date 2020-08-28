import { iColumn } from "../ColumnsBucket/iColumn";
import {
  AddressColumn,
  CityColumn,
  CompanyColumn,
  CountryColumn,
  EmailColumn,
  FirstNameColumn,
  IdColumn,
  LastNameColumn,
  NumberColumn,
  PhoneColumn,
} from "../ColumnsBucket/ColumnsBucket";

export const columnDef: iColumn[] = [
  new IdColumn({checkboxSelection:true}),
  new FirstNameColumn({editable:true}),
  new LastNameColumn(),
  new EmailColumn({editable:true}),
  new PhoneColumn(),
  new NumberColumn(),
  new CompanyColumn(),
  new AddressColumn(),
  new CityColumn(),
  new CountryColumn(),
];
