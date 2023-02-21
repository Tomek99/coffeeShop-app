import React from "react";
import styles from "./BtnSave.module.scss";

function BtnSave() {
  return (
    <div className={styles.btnDiv}>
      <button type="submit" className={styles.btnSave}>
        Save
      </button>
    </div>
  );
}

export default BtnSave;
