import React from "react";
import { BiChevronRight } from "react-icons/bi";
import styles from "./BtnRight.module.css";
import PropTypes from "prop-types";

function BtnRight({ activeIndex, updateIndex }) {
  return (
    <button
      type="button"
      className={styles.BtnRight}
      onClick={() => updateIndex(activeIndex + 1)}
    >
      <BiChevronRight size={35} className={styles.btnIcon} />
    </button>
  );
}
BtnRight.propTypes = {
  activeIndex: PropTypes.number,
  updateIndex: PropTypes.func,
};
export default BtnRight;
