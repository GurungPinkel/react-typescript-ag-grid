import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadingSet,
  modalOpenSet,
  snackbarOpenSet,
} from '../../actions/actions';
import {
  GridReadyEvent,
  NewValueParams,
  RowNode,
  Column,
} from 'ag-grid-community';
import { RootState } from '../../reducers';

import ExampleCellComponent from '../ExampleCellComponent';
import LoadingSpinner from '../LoadingSpinner';
import Snackbar from '../Snackbar';
import TransitionsModal from '../TransitionsModal';

import 'ag-grid-enterprise/dist/styles/ag-grid.css';
import 'ag-grid-enterprise/dist/styles/ag-theme-material.css';

import { columnDef } from './columnDef';
import { exampleRowData } from './exampleRowData';

const frameworkComponents = {
  exampleCellComponent: ExampleCellComponent,
};

const EditModal = () => {
  const [rowData] = useState(exampleRowData);
  const [newCellValue, setNewCellValue] = useState<string>();
  const [oldCellValue, setOldCellValue] = useState<string>();
  const [colId, setColId] = useState<string | Column>('');
  const [rowNode, setRowNode] = useState<RowNode>();
  const { isLoading, modalOpen } = useSelector(
    (state: RootState) => state.reducer
  );
  const dispatch = useDispatch();

  console.log('isLoaidng ->', isLoading);

  const onGridReady = (params: GridReadyEvent): void => {
    console.log('test');
    console.log(params);
  };

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
    const { column, newValue, node, oldValue } = params;
    const colId = column.getColId();

    // save param values to state for modal button click handlers
    setNewCellValue(newValue);
    setOldCellValue(oldValue);
    setColId(colId);
    setRowNode(node);

    // temp validation
    if (newValue.length > 1 && !modalOpen) {
      // open modal
      dispatch(modalOpenSet(true));
    }
    // TODO: add error handler if newValue is undefined
  };

  const handleModalClose = (): void => {
    // remove newVal from cell and replace with oldVal
    if (rowNode) rowNode.setDataValue(colId, oldCellValue);

    // TODO: add error handler if rowNode is undefined

    // set timeout to trigger modal close after async setDataValue call
    setTimeout(() => {
      dispatch(modalOpenSet(false));
    }, 0);
  };

  const handleModalSubmit = (): void => {
    // close modal
    dispatch(modalOpenSet(false));

    // put newCellValue to the backend

    // loading spinner
    dispatch(loadingSet(true));

    // snackbar
    dispatch(snackbarOpenSet(true));
  };

  return (
    <div
      className="ag-theme-material"
      style={{ height: '500px', width: '100%' }}
    >
      <TransitionsModal
        handleModalClose={handleModalClose}
        handleModalSubmit={handleModalSubmit}
      />
      {isLoading && <LoadingSpinner />}
      <AgGridReact
        columnDefs={columnDef}
        rowData={rowData}
        onCellValueChanged={onCellValueChanged}
        defaultColDef={{
          sortable: true,
        }}
        rowSelection="multiple"
        frameworkComponents={frameworkComponents}
        debug={process.env.NODE_ENV === 'development'}
        onGridReady={onGridReady}
      ></AgGridReact>
      <Snackbar />
    </div>
  );
};

export default EditModal;
