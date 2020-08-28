import { iColumn } from "../../Grid/iColumn";
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
  new IdColumn(),
  new FirstNameColumn(true),
  new LastNameColumn(),
  new EmailColumn(true),
  new PhoneColumn(),
  new NumberColumn(),
  new CompanyColumn(),
  new AddressColumn(),
  new CityColumn(),
  new CountryColumn(),
];
