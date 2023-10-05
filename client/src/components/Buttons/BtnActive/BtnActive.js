import React from "react";
import styles from "./BtnActive.module.scss";

function BtnActive({ handleBtn }) {
  return (
    <button type="button" className={styles.BtnActive} onClick={handleBtn}>
      Active
    </button>
  );
}

export default BtnActive;
