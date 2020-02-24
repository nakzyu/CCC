import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.navlist}>
        <li className={styles.navitem}>HOW TO USE</li>
        <li className={styles.navitem}>currency</li>
        <li className={styles.navitem}>calculate</li>
      </ul>
    </nav>
  );
}
export default Header;
