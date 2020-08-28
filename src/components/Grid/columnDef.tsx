import {
  ICellRendererComp,
  ICellRendererFunc,
  ValueGetterParams,
} from "ag-grid-community";

export interface iColumns {
  headerName: string;
  field: string;
  editable: boolean;
  checkboxSelection?: boolean;
  enableCellChangeFlash?: boolean;
  cellRenderer?:
    | {
        new (): ICellRendererComp;
      }
    | ICellRendererFunc
    | string;
  valueGetter?: any;
}

export const columnDef: iColumns[] = [
  {
    headerName: "ID",
    field: "id",
    editable: false,
    cellRenderer: "exampleCellComponent",
    valueGetter: (params: ValueGetterParams) => {
      return parseInt(params.data.id) * 100;
    },
  },
  {
    headerName: "First Name",
    field: "firstName",
    editable: true,
  },
  { headerName: "Last Name", field: "lastName", editable: false },
  { headerName: "Number", field: "number", editable: false },
  { headerName: "Address", field: "address", editable: false },
  { headerName: "City", field: "city", editable: false },
  { headerName: "Country", field: "country", editable: false },
  { headerName: "Phone", field: "phone", editable: false },
  { headerName: "Emailf", field: "email", editable: false },
  { headerName: "Company", field: "company", editable: false },
];
