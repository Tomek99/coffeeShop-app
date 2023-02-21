import React from "react";
import styles from "./BtnEditSettings.module.scss";
import PropTypes from "prop-types";

function BtnEditSettings({ text, handleBtn }) {
  return (
    <button className={styles.btnEdit} onClick={handleBtn}>
      {text}{" "}
    </button>
  );
}

BtnEditSettings.propTypes = {
  text: PropTypes.string,
  handleBtn: PropTypes.func,
};
export default BtnEditSettings;
