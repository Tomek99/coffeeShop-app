import React from "react";
import styles from "./BtnShipmentHome.module.css";

function BtnShipmentHome({ text }) {
  return (
    <button type="button" className={styles.BtnShipmentHome}>
      <span className={styles.btnPosition}> {text}</span>
    </button>
  );
}

export default BtnShipmentHome;
