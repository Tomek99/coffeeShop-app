import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./BtnClose.module.scss";
import PropTypes from "prop-types";

function BtnClose({ handleBtn, btnId }) {
  return (
    <button className={styles.btnClose} onClick={handleBtn} id={btnId}>
      <IoCloseSharp size={30} />
    </button>
  );
}

BtnClose.propTypes = {
  handleBtn: PropTypes.func,
};

export default BtnClose;
