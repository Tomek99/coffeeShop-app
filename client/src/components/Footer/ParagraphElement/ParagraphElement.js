import React from "react";
import styles from "./ParagraphElement.module.scss";

function ParagraphElement({ text, icon }) {
  return (
    <div className={styles.ParagraphElement}>
      <p>
        {icon}
        {text}
      </p>
    </div>
  );
}

export default ParagraphElement;
