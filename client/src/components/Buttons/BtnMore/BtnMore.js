import React from "react";
import styles from "./BtnMore.module.scss";

function BtnMore({ handleBtn }) {
  return (
    <button className={styles.BtnMore} type="button" onClick={handleBtn}>
      More
    </button>
  );
}

export default BtnMore;
