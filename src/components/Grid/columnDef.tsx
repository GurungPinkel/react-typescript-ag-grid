import {
  ICellRendererComp,
  ICellRendererFunc,
  NewValueParams,
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
  onCellValueChanged?: Function;
  valueGetter?: any;
}

/**
 * Performs a series of actions when a cell is edited
 * @param params - event obj with with both the old and new values
 * Actions:
 *  1. Validate the new value is acceptable
 *  2. Display Modal to ensure user wants to make changes
 *  3. Async put new data to backend
 *  4. Display loading spinner and snackbar to confirm changes
 */
const onCellValueChanged = (params: NewValueParams) => {
  const { newValue, oldValue } = params;

  console.log("params", params);
  // temp validation
  // if (newValue.length > 1)
};

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
    onCellValueChanged,
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
