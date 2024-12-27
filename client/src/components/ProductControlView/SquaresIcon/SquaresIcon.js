import React from "react";
import styles from "./SqueresIcon.module.scss";

function SquaresIcon({ selectedView, selectView }) {
  return (
    <div
      className={
        selectedView !== 0
          ? styles.SquaresIcon
          : `${styles.SquaresIcon} ${styles.selectedView}`
      }
      onClick={() => selectView(0)}
    >
      <div className={styles.rowContent}>
        <span className={styles.squareIcon}></span>
        <span className={styles.squareIcon}></span>
        <span className={styles.squareIcon}></span>
      </div>
      <div className={styles.rowContent}>
        <span className={styles.squareIcon}></span>
        <span className={styles.squareIcon}></span>
        <span className={styles.squareIcon}></span>
      </div>
    </div>
  );
}

export default SquaresIcon;
