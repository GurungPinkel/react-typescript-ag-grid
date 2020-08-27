import { SnackbarOrigin } from '@material-ui/core/Snackbar';

export type State = {
  isLoading: boolean;
  message: string;
  modalOpen: boolean;
  snackbarOpen: boolean;
  snackbarOrigin: SnackbarOrigin;
};
