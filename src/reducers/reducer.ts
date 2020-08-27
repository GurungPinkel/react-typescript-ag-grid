import { ActionType, Action } from "../actions";
import { State } from "./reducerTypes";

const { MESSAGE_SEND, MODAL_OPEN_SET } = ActionType;

export const initialState: State = {
  message: "React Starter App is working with TypeScript & Redux",
  modalOpen: false,
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
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
