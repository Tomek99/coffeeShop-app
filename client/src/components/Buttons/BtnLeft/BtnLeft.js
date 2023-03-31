import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import styles from "./BtnLeft.module.css";
import PropTypes from "prop-types";

function BtnLeft({ activeIndex, updateIndex }) {
  return (
    <button
      type="button"
      className={styles.BtnLeft}
      onClick={() => updateIndex(activeIndex - 1)}
    >
      <BiChevronLeft size={35} className={styles.btnIcon} />
    </button>
  );
}
BtnLeft.propTypes = {
  activeIndex: PropTypes.number,
  updateIndex: PropTypes.func,
};
export default BtnLeft;
