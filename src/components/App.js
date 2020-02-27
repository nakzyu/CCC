import React, { useEffect, useState } from "react";
import Card from "./dashboard/Card";
import Selector from "./dashboard/Selector";
import styles from "./App.module.css";

import { getLatest, getCurrent, getPrev } from "../actions/currencyAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const latestDate = useSelector(state => state.latest.date);
  const current = useSelector(state => state.current);
  const prev = useSelector(state => state.prev);
  const bc = useSelector(state => state.base);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatest());
  }, [dispatch]);

  useEffect(() => {
    if (bc.length) {
      dispatch(getCurrent(latestDate, bc));
    } else {
      dispatch(getCurrent(latestDate, "USD"));
    }
  }, [latestDate, dispatch, bc]);

  useEffect(() => {
    if (bc.length) {
      dispatch(getPrev(latestDate, bc));
    } else {
      dispatch(getPrev(latestDate, "USD"));
    }
  }, [latestDate, dispatch, bc]);

  return (
    <div className={styles.app}>
      <button>dd</button>
      <Selector key={current.base} />
      {current.rates &&
        typeof current.rates === "object" &&
        prev.rates &&
        typeof prev.rates === "object" &&
        Object.keys(current.rates).map(k => (
          <Card
            key={k}
            className={styles.cards}
            base={k}
            rate={current.rates[k].toFixed(3)}
            //증감률
            percent={(
              ((current.rates[k] - prev.rates[k]) / current.rates[k]) *
              100
            ).toFixed(2)}
          />
        ))}
    </div>
  );
}
export default App;
