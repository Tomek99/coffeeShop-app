import React from "react";
import styles from "./BtnDots.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

function BtnDots() {
  return (
    <button className={styles.btnInvoice}>
      <BsThreeDotsVertical size={20} />
    </button>
  );
}

export default BtnDots;
