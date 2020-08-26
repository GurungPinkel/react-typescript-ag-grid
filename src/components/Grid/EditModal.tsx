import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { GridReadyEvent } from "ag-grid-community";
import ExampleCellComponent from "../ExampleCellComponent";

import "ag-grid-enterprise/dist/styles/ag-grid.css";
import "ag-grid-enterprise/dist/styles/ag-theme-material.css";

import { columnDef } from "./columnDef";
import { exampleRowData } from "./exampleRowData";

const frameworkComponents = {
  exampleCellComponent: ExampleCellComponent,
};

const EditModal = () => {
  const [rowData, setRowData] = useState(exampleRowData);
  // const [];

  const onGridReady = (params: GridReadyEvent): void => {
    console.log("test");
    console.log(params);
  };

  return (
    <div
      className="ag-theme-material"
      style={{ height: "500px", width: "100%" }}
    >
      <AgGridReact
        columnDefs={columnDef}
        rowData={rowData}
        defaultColDef={{
          sortable: true,
        }}
        rowSelection="multiple"
        frameworkComponents={frameworkComponents}
        debug={process.env.NODE_ENV === "development"}
        onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  );
};

export default EditModal;
