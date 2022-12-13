import React from "react";
import styles from "./HeaderSection.module.scss";

function Header(props) {
  return (
    <header className={styles.headerSection}>
      {props.firstWord} <span>{props.secondWord}</span>
    </header>
  );
}

export default Header;
