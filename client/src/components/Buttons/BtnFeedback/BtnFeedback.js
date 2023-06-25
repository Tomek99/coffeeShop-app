import React from "react";
import styles from "./BtnFeedback.module.css";

function BtnFeedback({ handleBtn }) {
  return (
    <button className={styles.btnFeedback} onClick={handleBtn}>
      Give feedback
    </button>
  );
}

export default BtnFeedback;
