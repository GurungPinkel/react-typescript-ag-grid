import { iColumn } from "../../Grid/iColumn";
import {
  EmailColumn,
  FirstNameColumn,
  IdColumn,
  LastNameColumn,
  PhoneColumn,
} from "../ColumnsBucket/ColumnsBucket";

export const columnDef: iColumn[] = [
  new IdColumn(),
  new FirstNameColumn(true),
  new LastNameColumn(),
  new EmailColumn(true),
  new PhoneColumn(),
  
];
