import React from "react";
import { ErrorMessage } from "formik";
import styles from "./ErrMessage.module.scss";
import PropTypes from "prop-types";

function ErrMessage({ name }) {
  return (
    <div className={styles.errorComponent}>
      <ErrorMessage name={name} />
    </div>
  );
}

ErrMessage.propTypes = {
  name: PropTypes.string,
};
export default ErrMessage;
