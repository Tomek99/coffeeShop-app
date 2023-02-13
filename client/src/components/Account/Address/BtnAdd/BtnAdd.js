import React from "react";
import styles from "./BtnAdd.module.scss";
import PropTypes from "prop-types";

function BtnAddAddress({ name, handleBlurScreen }) {
  return (
    <button className={styles.btnAdd} onClick={handleBlurScreen}>
      + Add new {name}
    </button>
  );
}
BtnAddAddress.propTypes = {
  name: PropTypes.string,
  handleBlurScreen: PropTypes.func,
};
export default BtnAddAddress;
