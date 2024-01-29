import React from "react";
import { TiTick } from "react-icons/ti";
import styles from "./BtnConfirm.module.scss";

function BtnConfirm() {
  return (
    <button type="submit" className={styles.BtnConfirm}>
      Confirm
    </button>
  );
}

export default BtnConfirm;
