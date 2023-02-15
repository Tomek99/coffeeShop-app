import React from "react";
import styles from "./BtnCancell.module.scss";
import PropTypes from "prop-types";

function BtnCancell({ handleBlurScreen }) {
  return (
    <button className={styles.BtnCancell} onClick={handleBlurScreen}>
      Cancell
    </button>
  );
}

BtnCancell.propTypes = {
  handleBlurScreen: PropTypes.func,
};
export default BtnCancell;
