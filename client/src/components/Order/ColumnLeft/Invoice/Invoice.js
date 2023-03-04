import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import ConciseInfo from "../ExtraInfo/ConciseInfo/ConciseInfo";
import styles from "./Invoice.module.scss";

function Invoice() {
  const conciseInfo =
    "In our online store, the proof of purchase is an invoice. As a standard, we issue it to the data from the delivery address.";
  return (
    <div className={styles.Invoice}>
      <HeadingThree title="Invoice details" />
      <ConciseInfo text={conciseInfo} />
    </div>
  );
}

export default Invoice;
