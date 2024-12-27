import React from "react";
import styles from "./RowsMediumIcon.module.scss";

function RowsMediumIcon({ selectedView, selectView }) {
  return (
    <div
      className={
        selectedView !== 1
          ? styles.RowsMediumIcon
          : `${styles.RowsMediumIcon} ${styles.selectedView}`
      }
      onClick={() => selectView(1)}
    >
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
