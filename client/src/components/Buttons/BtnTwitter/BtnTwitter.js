import React from "react";
import styles from "./BtnTwitter.module.css";
import { GrTwitter } from "react-icons/gr";

function BtnTwitter() {
  return (
    <a href="http://twitter.com" className={styles.btnTwitter}>
      {" "}
      <GrTwitter className={styles.btnIconTwitter} />
      <span className={styles.btnSpan}>Follow on twitter</span>
    </a>
  );
}

export default BtnTwitter;
