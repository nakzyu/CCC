import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>
        <div className={styles.logo}>
          CCC
          <div className={styles.subject}>
            <div>Comfortable</div>
            <div>Currency</div>
            <div>Converter</div>
          </div>
        </div>
      </Link>
      <Link to="/info" className={styles.link}>
        <div className={styles.navItem}>INFO</div>
      </Link>
    </nav>
  );
}
export default Header;
