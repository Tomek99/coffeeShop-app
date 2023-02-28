import React from "react";
import styles from "./ParagraphElement.module.scss";

function ParagraphElement({ item }) {
  const { name } = item;
  return (
    <div className={styles.ParagraphElement}>
      <p>{name}</p>
    </div>
  );
}

export default ParagraphElement;
