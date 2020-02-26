import React, { useEffect, useState, Fragment } from "react";
import Card from "./dashboard/Card";
import Selector from "./dashboard/Selector";
import styles from "./App.module.css";

import { getLatest, getCurrent, getPrev } from "../actions/currencyAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const latestDate = useSelector(state => state.latestDate);
  const current = useSelector(state => state.current);
  const prev = useSelector(state => state.prev);
  const dispatch = useDispatch();
  const baseCurrencyDate = useSelector(state => state.prev.date);

  useEffect(() => {
    dispatch(getLatest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCurrent(latestDate));
  }, [latestDate, dispatch]);

  useEffect(() => {
    dispatch(getPrev(latestDate));
  }, [latestDate, dispatch]);

  return (
    <div className={styles.app}>
      <Selector />
      {current.rates &&
        typeof current.rates === "object" &&
        prev.rates &&
        typeof prev.rates === "object" &&
        Object.keys(current.rates).map(k => (
          <Card
            key={k}
            className={styles.cards}
            country={k}
            rate={current.rates[k]}
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
