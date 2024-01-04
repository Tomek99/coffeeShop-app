import React from "react";
import styles from "./BtnFeedback.module.css";
import { VscFeedback } from "react-icons/vsc";

function BtnFeedback({ handleBtn }) {
  return (
    <>
      <button className={styles.btnFeedback} onClick={handleBtn}>
        Give Feedback
      </button>
      <button
        className={`${styles.btnFeedback} ${styles.btnFeedbackIcon}`}
        onClick={handleBtn}
      >
        <VscFeedback size={18} />
      </button>
    </>
  );
}

export default BtnFeedback;
