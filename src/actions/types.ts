import {
  LoadingSetAction,
  MessageSendAction,
  ModalOpenSetAction,
  SnackbarOpenSetAction,
} from './actions';

export enum ActionType {
  LOADING_SET,
  MESSAGE_SEND,
  MODAL_OPEN_SET,
  SNACKBAR_OPEN_SET,
}

export type Action =
  | LoadingSetAction
  | MessageSendAction
  | ModalOpenSetAction
  | SnackbarOpenSetAction;
