import { combineReducers } from "redux";
import latestReducer from "./latestReducer";

const rootReducer = combineReducers({
  latest: latestReducer
});

export default rootReducer;
