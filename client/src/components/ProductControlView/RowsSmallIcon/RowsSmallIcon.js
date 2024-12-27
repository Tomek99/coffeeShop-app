import React from "react";
import styles from "./RowsSmallIcon.module.scss";

function RowsSmallIcon({ selectedView, selectView }) {
  return (
    <div
      className={
        selectedView !== 2
          ? styles.RowsSmallIcon
          : `${styles.RowsSmallIcon} ${styles.selectedView}`
      }
      onClick={() => selectView(2)}
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
      <div className={styles.rowContent}>
        <span className={styles.squareIcon}></span>
        <span className={styles.barIcon}></span>
      </div>
    </div>
  );
}

export default RowsSmallIcon;
