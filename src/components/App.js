import React, { useEffect, useState, Fragment } from "react";

import Table from "./dashboard/Table";
import { getLatest, getCurrent, getPrev } from "../actions/currencyAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const latestDate = useSelector(state => state.latestDate);
  const current = useSelector(state => state.current);
  const dispatch = useDispatch();
  const baseCurrencyDate = useSelector(state => state.prev.date);

  useEffect(() => {
    dispatch(getLatest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCurrent(latestDate));
  }, [latestDate, dispatch]);

  useEffect(() => {
    dispatch(getPrev(latestDate, baseCurrencyDate));
  }, [latestDate, dispatch, baseCurrencyDate]);

  return (
    <Fragment>
      {/* {latest.rates &&
        typeof latest.rates === "object" &&
        Object.keys(latest.rates).map(k => (
          <Table country={k} rate={latest.rates[k]} />
        ))} */}
    </Fragment>
  );
}
export default App;
