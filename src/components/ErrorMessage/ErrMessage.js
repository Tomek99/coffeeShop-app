import React from "react";
import { ErrorMessage } from "formik";
import styles from "./ErrMessage.module.scss";

function ErrMessage(pros) {
  return (
    <div className={styles.errorComponent}>
      <ErrorMessage name={pros.name} />
    </div>
  );
}

export default ErrMessage;
