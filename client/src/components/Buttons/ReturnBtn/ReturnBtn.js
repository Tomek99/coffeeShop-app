import React from "react";
import styles from "./ReturnBtn.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MdArrowBackIosNew } from "react-icons/md";

function ReturnBtn({ text, returnPath }) {
  return (
    <Link to={returnPath} className={styles.ReturnBtn}>
      <span>
        <MdArrowBackIosNew />
      </span>
      <span>{text}</span>
    </Link>
  );
}
ReturnBtn.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string,
};
export default ReturnBtn;
