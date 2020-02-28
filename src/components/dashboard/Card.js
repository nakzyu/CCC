import React from "react";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { getBase } from "../../actions/currencyAction";
import { currencyTable } from "./currencyTable";

function Card(props) {
  const dispatch = useDispatch();
  const boundBase = text => dispatch(getBase(text));

  const checkUpDown = param => {
    if (param > 0) {
      return <div className={`${styles.plus} ${styles.percent}`}>+{param}</div>;
    } else if (param < 0) {
      return <div className={`${styles.minus} ${styles.percent}`}>{param}</div>;
    } else
      return <div className={`${styles.equal} ${styles.percent}`}>{param}</div>;
  };

  return (
    <div className={styles.card} onClick={() => boundBase(props.base)}>
      <img
        src={require("../../img/" + props.base + ".png")}
        alt="flag"
        style={{
          width: "6rem",
          height: "6rem"
        }}
      />

      <div className={styles.base}>{currencyTable[props.base]}</div>

      <div className={styles.rate}>
        {props.rate} {props.base}
      </div>

      {checkUpDown(props.percent)}
    </div>
  );
}

export default Card;
