import React from "react";
import { Link } from "react-router-dom";
import styles from "./Support.module.scss";

function Support() {
  return (
    <div className={styles.Support}>
      <h2 className={styles.firstHeader}>Do you need help?</h2>
      <Link className={styles.supportLink}>
        In the help center you will find a full database of questions and
        answers
      </Link>
    </div>
  );
}

export default Support;
