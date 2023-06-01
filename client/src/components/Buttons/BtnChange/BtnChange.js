import React from "react";
import styles from "./BtnChange.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BtnMore() {
  return (
    <Link className={styles.BtnMore} to="/order">
      Change
    </Link>
  );
}

BtnMore.propTypes = {
  handleBtn: PropTypes.func,
};

export default BtnMore;
