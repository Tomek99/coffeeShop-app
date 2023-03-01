import React from "react";
import styles from "./ParagraphElement.module.scss";

function ParagraphElement({ item, icon }) {
  const { name } = item;
  console.log(icon);
  return (
    <div className={styles.ParagraphElement}>
      <p>
        {icon}
        {name}
      </p>
    </div>
  );
}

export default ParagraphElement;
