import React from "react";
import styles from "./BtnReturn.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MdArrowBackIosNew } from "react-icons/md";

function BtnReturn({ text, returnPath }) {
  return (
    <Link to={returnPath} className={styles.ReturnBtn}>
      <MdArrowBackIosNew />
      <span>{text}</span>
    </Link>
  );
}
BtnReturn.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string,
};
export default BtnReturn;
