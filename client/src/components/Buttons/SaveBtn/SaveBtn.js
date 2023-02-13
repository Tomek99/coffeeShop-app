import React from "react";
import styles from "./SaveBtn.module.scss";

function SaveBtn() {
  return (
    <div className={styles.btnDiv}>
      <button type="submit" className={styles.btnSave}>
        Save
      </button>
    </div>
  );
}

export default SaveBtn;
