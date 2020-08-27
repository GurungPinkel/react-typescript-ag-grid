import { ActionType } from './types';
import { Dispatch } from 'redux';
import { instance1 } from '../axios';

const { LOADING_SET, MESSAGE_SEND, MODAL_OPEN_SET } = ActionType;

// LOADING SET
export interface LoadingSetPayload {
  isLoading: boolean;
}

export interface LoadingSetAction {
  type: typeof LOADING_SET;
  payload: LoadingSetPayload;
}

export const loadingSet = (isLoading: boolean): LoadingSetAction => ({
  type: LOADING_SET,
  payload: { isLoading },
});

// MESSAGE SEND
export interface MessageSendPayload {
  message: string;
}

export interface MessageSendAction {
  type: typeof MESSAGE_SEND;
  payload: MessageSendPayload;
}

export const messageSend = (message: string): MessageSendAction => ({
  type: MESSAGE_SEND,
  payload: { message },
});

export const messageSendThunk = () => {
  return async (dispatch: Dispatch) => {
    const response = await instance1.get<MessageSendPayload>('some fake url');

    dispatch<MessageSendAction>({
      type: MESSAGE_SEND,
      payload: response.data,
    });
  };
};

// MODAL OPEN SET
export interface ModalOpenSetPayload {
  modalOpen: boolean;
}

export interface ModalOpenSetAction {
  type: typeof MODAL_OPEN_SET;
  payload: ModalOpenSetPayload;
}

export const modalOpenSet = (modalOpen: boolean): ModalOpenSetAction => ({
  type: MODAL_OPEN_SET,
  payload: { modalOpen },
});
