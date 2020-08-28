import { iColumn } from "../ColumnsBucket/iColumn";
import {
  EmailColumn,
  FirstNameColumn,
  IdColumn,
  LastNameColumn,
  PhoneColumn,
} from "../ColumnsBucket/ColumnsBucket";

export const columnDef: iColumn[] = [
  new IdColumn(),
  new FirstNameColumn(),
  new LastNameColumn(),
  new EmailColumn(),
  new PhoneColumn(),
  
];
