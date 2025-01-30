import React from "react";
import styles from "./BtnGetInvoice.module.scss";

function BtnGetInvoice() {
  return (
    <button className={styles.BtnGetInvoice}>Download invoice (PDF)</button>
  );
}

export default BtnGetInvoice;
