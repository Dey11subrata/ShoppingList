import { combineReducers } from "redux";
import itemReducer from "./itemReducer";

export default combineReducers({
  item: itemReducer,
});

// this one is our root reducer
// if we have multiple reducers they will meet here
