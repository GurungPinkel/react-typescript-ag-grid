import React from 'react';
import MUISnackbar from '@material-ui/core/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { snackbarOpenSet } from '../actions';

const Snackbar = () => {
  const { snackbarOpen, snackbarOrigin } = useSelector(
    (state: RootState) => state.reducer
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    console.log('attempting to close');
    dispatch(snackbarOpenSet(false));
  };

  return (
    <MUISnackbar
      anchorOrigin={snackbarOrigin}
      autoHideDuration={1500}
      open={snackbarOpen}
      onClose={handleClose}
      message="Saved"
      transitionDuration={750}
    />
  );
};

export default Snackbar;
