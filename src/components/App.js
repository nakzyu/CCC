import React, { useEffect, useState } from "react";
import Card from "./dashboard/Card";
import styles from "./App.module.css";
import { getLatest, getCurrent, getPrev } from "../actions/currencyAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const latestDate = useSelector(state => state.latest.date);
  const current = useSelector(state => state.current);
  const prev = useSelector(state => state.prev);
  const bc = useSelector(state => state.base);
  const [value, setValue] = useState(100);

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
      <div className={styles.inputBar}>
        <input
          className={styles.inputArea}
          onChange={e => setValue(e.target.value)}
          value={value}
          name="value"
          type="number"
        />
        {bc.length ? bc : "USD"}
        <img
          src={require("../img/" + (bc.length ? bc : "USD") + ".png")}
          alt="flag"
          style={{
            width: "6rem",
            height: "6rem",
            marginLeft: "1rem"
          }}
        />
      </div>
      {/* check fetcing is done or not */}
      {current.rates &&
        typeof current.rates === "object" &&
        prev.rates &&
        typeof prev.rates === "object" &&
        Object.keys(current.rates).map(k => (
          <Card
            key={k}
            bc={bc}
            base={k}
            rate={(current.rates[k] * value).toFixed(3)}
            // Change rates
            percent={(
              ((current.rates[k] - prev.rates[k]) / current.rates[k]) *
              100
            ).toFixed(2)}
          />
        ))}
      <div className={styles.footer}>
        Euro foreign exchange reference rates: {latestDate}
      </div>
    </div>
  );
}
export default App;
