import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { State } from "./reducerTypes";

export interface RootState {
  reducer: State;
}

export default combineReducers({
  reducer,
});
