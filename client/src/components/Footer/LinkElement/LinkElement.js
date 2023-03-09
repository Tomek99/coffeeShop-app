import React from "react";
import { Link } from "react-router-dom";
import styles from "./LinkElement.module.scss";

function LinkElement({ item }) {
  const { name, path } = item;
  return (
    <li className={styles.LinkElement}>
      <Link to={path}>{name}</Link>
    </li>
  );
}

export default LinkElement;
