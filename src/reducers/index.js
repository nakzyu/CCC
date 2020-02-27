import { combineReducers } from "redux";
import latestDateReducer from "./latestDateReducer";
import CurrentCurrencyReducer from "./CurrentCurrencyReducer";
import PrevCurrencyReducer from "./PrevCurrencyReducer";
import BaseCurrencyReducer from "./BaseCurrencyReducer";

const rootReducer = combineReducers({
  latest: latestDateReducer,
  current: CurrentCurrencyReducer,
  prev: PrevCurrencyReducer,
  base: BaseCurrencyReducer
});

export default rootReducer;
