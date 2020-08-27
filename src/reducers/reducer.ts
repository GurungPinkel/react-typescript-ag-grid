import { ActionType, Action } from '../actions';
import { State } from './reducerTypes';

const { LOADING_SET, MESSAGE_SEND, MODAL_OPEN_SET } = ActionType;

export const initialState: State = {
  isLoading: false,
  message: 'React Starter App is working with TypeScript & Redux',
  modalOpen: false,
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case LOADING_SET: {
      const { isLoading } = action.payload;

      return {
        ...state,
        isLoading,
      };
    }
    case MESSAGE_SEND: {
      const { message } = action.payload;
      return {
        ...state,
        message,
      };
    }
    case MODAL_OPEN_SET: {
      const { modalOpen } = action.payload;

      return {
        ...state,
        modalOpen,
      };
    }
    default:
      return state;
  }
};
