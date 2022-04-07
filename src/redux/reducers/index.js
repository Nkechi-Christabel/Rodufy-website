import { combineReducers } from "redux";
import { errorReducer, userReducers } from "./userReducers";

const reducers = combineReducers({
  userInfo: userReducers,
  error: errorReducer,
});

export default reducers;
