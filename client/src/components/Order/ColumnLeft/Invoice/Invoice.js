import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Invoice.module.scss";

function Invoice() {
  return (
    <div className={styles.Invoice}>
      <HeadingThree title="Invoice details" />
    </div>
  );
}

export default Invoice;
