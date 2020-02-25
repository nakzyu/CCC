import { combineReducers } from "redux";
import latestDateReducer from "./latestDateReducer";
import CurrentCurrencyReducer from "./CurrentCurrencyReducer";
import PrevCurrencyReducer from "./PrevCurrencyReducer";

const rootReducer = combineReducers({
  latestDate: latestDateReducer,
  current: CurrentCurrencyReducer,
  prev: PrevCurrencyReducer
});

export default rootReducer;
