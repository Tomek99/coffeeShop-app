import React from "react";
import styles from "./BtnPlusMinus.module.css";
import PropTypes from "prop-types";

function BtnPlusMinus({ children, handleBtn }) {
  return (
    <button onClick={handleBtn} className={styles.BtnPlusMinus}>
      {children}
    </button>
  );
}
BtnPlusMinus.propTypes = {
  children: PropTypes.object,
  handleBtn: PropTypes.func,
};
export default BtnPlusMinus;
