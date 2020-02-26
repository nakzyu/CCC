import React, { Fragment } from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <img
        src={require("../../img/" + props.country + ".png")}
        alt="flag"
        style={{
          width: "4rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      />

      <div className={styles.country}>{props.country}</div>
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
