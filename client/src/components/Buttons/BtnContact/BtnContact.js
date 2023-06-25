import React from "react";
import styles from "./BtnContact.module.scss";

function BtnContact({ index }) {
  return (
    <button type="submit" className={styles.BtnContact} id={index}>
      Send
    </button>
  );
}

export default BtnContact;
