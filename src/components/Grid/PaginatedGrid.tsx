import React, { ChangeEvent, useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColumnApi, GridApi, GridReadyEvent } from "ag-grid-community";
import { PaginationNumberFormatterParams } from "ag-grid-community/dist/lib/entities/gridOptions";
import ExampleCellComponent from "../ExampleCellComponent";

import "ag-grid-enterprise/dist/styles/ag-grid.css";
import "ag-grid-enterprise/dist/styles/ag-theme-material.css";

import { columnDef } from "./columnDef";
import { exampleRowData } from "./exampleRowData";

const frameworkComponents = {
  exampleCellComponent: ExampleCellComponent,
};

const PaginatedGrid = () => {
  const [rowData, setRowData] = useState(exampleRowData);
  const [columnApi, setColumnApi] = useState<ColumnApi>();
  const [gridApi, setGridApi] = useState<GridApi>();

  const onGridReady = (params: GridReadyEvent): void => {
    setGridApi(params.api);
    setColumnApi(params.columnApi);
  };

  const onPageSizeChanged = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newPageSize = Number(event.target.value);
    if (gridApi) gridApi.paginationSetPageSize(newPageSize);
    // else throw error
  };

  const paginationNumberFormatter = (
    params: PaginationNumberFormatterParams
  ): string => {
    return params.value.toString();
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="example-wrapper">
        <div className="example-header">
          Page Size:
          <select onChange={onPageSizeChanged} id="page-size">
            <option value={10} selected>
              10
            </option>
            <option value={100}>100</option>
            <option value={500}>500</option>
            <option value={1000}>1000</option>
          </select>
        </div>
        <div
          className="ag-theme-material"
          style={{ height: "500px", width: "100%" }}
        >
          <AgGridReact
            columnDefs={columnDef}
            rowData={rowData}
            pagination
            paginationPageSize={10}
            paginationNumberFormatter={paginationNumberFormatter}
            defaultColDef={{
              sortable: true,
            }}
            rowSelection="multiple"
            frameworkComponents={frameworkComponents}
            debug={process.env.NODE_ENV === "development"}
            onGridReady={onGridReady}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default PaginatedGrid;
