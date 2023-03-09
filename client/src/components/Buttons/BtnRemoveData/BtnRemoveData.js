import React from "react";
import styles from "./BtnRemoveData.module.scss";

function BtnRemoveData({ deleteDocument }) {
  return (
    <button className={styles.BtnRemoveData} onClick={deleteDocument}>
      Yes, remove
    </button>
  );
}

export default BtnRemoveData;
