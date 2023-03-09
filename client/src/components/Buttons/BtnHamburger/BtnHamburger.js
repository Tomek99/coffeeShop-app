import React from "react";
import styles from "./BtnHamburger.module.scss";

function BtnHamburger({ isActive, handleBtn }) {
  return (
    <div
      className={
        isActive
          ? `${styles.BtnHamburger} ${styles.active}`
          : styles.BtnHamburger
      }
      onClick={handleBtn}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
}

export default BtnHamburger;
