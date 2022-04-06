import { combineReducers } from "redux";
import { userReducers } from "./userReducers";

const reducers = combineReducers({
  userInfo: userReducers,
});


export default reducers;
