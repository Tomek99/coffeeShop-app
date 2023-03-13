import React from "react";
import styles from "./BtnMore.module.scss";
import PropTypes from "prop-types";

function BtnMore({ handleBtn }) {
  return (
    <button className={styles.BtnMore} type="button" onClick={handleBtn}>
      More
    </button>
  );
}

BtnMore.propTypes = {
  handleBtn: PropTypes.func,
};

export default BtnMore;
