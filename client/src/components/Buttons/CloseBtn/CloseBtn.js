import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./CloseBtn.module.scss";
import PropTypes from "prop-types";

function CloseBtn({ handleBlurScreen }) {
  return (
    <button className={styles.btnClose} onClick={handleBlurScreen}>
      <IoCloseSharp size={30} />
    </button>
  );
}

CloseBtn.propTypes = {
  handleBtn: PropTypes.func,
};

export default CloseBtn;
