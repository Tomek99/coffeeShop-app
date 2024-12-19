import React from "react";
import styles from "./RowsMediumIcon.module.scss";

function RowsMediumIcon({ selectView }) {
  return (
    <div className={styles.RowsMediumIcon} onClick={() => selectView(1)}>
      <div className={styles.rowContent}>
        <span className={styles.squareIcon}></span>
        <span className={styles.barIcon}></span>
      </div>
      <div className={styles.rowContent}>
        <span className={styles.squareIcon}></span>
        <span className={styles.barIcon}></span>
      </div>
      <div className={styles.rowContent}>
        <span className={styles.squareIcon}></span>
        <span className={styles.barIcon}></span>
      </div>
    </div>
  );
}

export default RowsMediumIcon;
