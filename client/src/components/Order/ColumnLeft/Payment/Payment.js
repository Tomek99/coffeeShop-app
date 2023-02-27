import React from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Payment.module.scss";

function Payment() {
  return (
    <div className={styles.Payment}>
      <HeadingThree title="Payment" />
    </div>
  );
}

export default Payment;
