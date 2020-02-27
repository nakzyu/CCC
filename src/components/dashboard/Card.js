import React from "react";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { getBase } from "../../actions/currencyAction";

function Card(props) {
  const dispatch = useDispatch();
  const boundBase = text => dispatch(getBase(text));

  return (
    <div className={styles.card} onClick={() => boundBase(props.base)}>
      <img
        src={require("../../img/" + props.base + ".png")}
        alt="flag"
        style={{
          width: "4rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      />

      <div className={styles.base}>{props.base}</div>
      <div className={styles.rate}>{props.rate}.</div>
      <div className={styles.percent}>{props.percent}</div>
      {props.percent >= 0 ? (
        <img
          src={require("../../img/up-arrow.png")}
          alt="up-arrow"
          style={{
            width: "1rem",
            height: "1rem"
          }}
        />
      ) : (
        <img
          src={require("../../img/down-arrow.png")}
          alt="down-arrow"
          style={{
            width: "1rem",
            height: "1rem"
          }}
        />
      )}
    </div>
  );
}

export default Card;
