import React from "react";
import styles from "./BtnAdd.module.scss";
import PropTypes from "prop-types";

function BtnAddAddress({ name, handleBtn }) {
  return (
    <button className={styles.btnAdd} onClick={handleBtn}>
      + Add new {name}
    </button>
  );
}
BtnAddAddress.propTypes = {
  name: PropTypes.string,
  handleBtn: PropTypes.func,
};
export default BtnAddAddress;
