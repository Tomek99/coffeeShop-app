import React from "react";
import styles from "./HeaderSection.module.scss";
import PropTypes from "prop-types";

function Header({ firstWord, secondWord }) {
  const conectedTitle = `${firstWord} ${secondWord}`;

  return <header className={styles.headerSection}>{conectedTitle}</header>;
}

Header.propTypes = {
  firstWord: PropTypes.string,
  secondWord: PropTypes.string,
};

export default Header;
