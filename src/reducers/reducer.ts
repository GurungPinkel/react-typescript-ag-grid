import { ActionType, Action } from '../actions';
import { State } from './reducerTypes';

const { MESSAGE_SEND } = ActionType;

export const initialState: State = {
  message: 'React Starter App is working with TypeScript & Redux'
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case MESSAGE_SEND: {
      const { message } = action.payload;
      return {
        ...state,
        message
      };
    }
    default:
      return state;
  }
};
