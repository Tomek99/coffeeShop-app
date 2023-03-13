import React from "react";
import HeadingThree from "../../HeadingThree/HeadingThree";
import styles from "./ItemSummary.module.scss";
import BtnChange from "../../Buttons/BtnChange/BtnChange";

function ItemSummary({ title, children }) {
  return (
    <div className={styles.ItemSummaryDetails}>
      <HeadingThree title={title} />
      <div className={styles.divContent}>
        <div className={styles.divParagraph}>{children}</div>
        {title === "Cart" ? null : <BtnChange />}
      </div>
    </div>
  );
}

export default ItemSummary;
