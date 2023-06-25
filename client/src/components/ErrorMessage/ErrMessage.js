import React from "react";
import { ErrorMessage } from "formik";
import styles from "./ErrMessage.module.scss";
import PropTypes from "prop-types";

function ErrMessage({ name }) {
  return (
    <ErrorMessage name={name}>
      {(msg) => <div className={styles.errorText}>{msg}</div>}
    </ErrorMessage>
  );
}

ErrMessage.propTypes = {
  name: PropTypes.string,
};
export default ErrMessage;
