import React from "react";
import styles from "./Info.module.css";

function Info() {
  return (
    <div className={styles.info}>
      <h1>
        CCC(Comfortable Currency Converter) is a simple currency converter.
      </h1>
      <h2>
        This app uses{" "}
        <a href="https://exchangeratesapi.io/">Exchange rates API </a>
        <div>
          and follows Euro foreign exchange reference rates, provided by
          <a href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html">
            {" "}
            ECB(European Central Bank)
          </a>
        </div>
      </h2>
      <div> If you have any questions, please email me at nakzyu@gmail.com</div>
    </div>
  );
}

export default Info;
