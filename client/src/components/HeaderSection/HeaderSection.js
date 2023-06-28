import React from "react";
import styles from "./HeaderSection.module.scss";
import PropTypes from "prop-types";

function Header({ firstWord, secondWord }) {
  return (
    <header className={styles.headerSection}>
      {firstWord} {secondWord}
    </header>
  );
}

Header.propTypes = {
  firstWord: PropTypes.string,
  secondWord: PropTypes.string,
};

export default Header;
