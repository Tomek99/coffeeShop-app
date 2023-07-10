import React from "react";
import styles from "./BtnRemoveData.module.scss";

function BtnRemoveData({ handleBtn }) {
  return (
    <button className={styles.BtnRemoveData} onClick={handleBtn}>
      Yes, remove
    </button>
  );
}

export default BtnRemoveData;
