import React from "react";
import styles from "./BtnExtraDetails.module.scss";

function BtnExtraDetails({ tabNumber, handleBtn, textBtn, storeNumber }) {
  return (
    <button
      type="button"
      className={
        tabNumber === storeNumber
          ? `${styles.BtnExtraDetails} ${styles.btn}`
          : styles.BtnExtraDetails
      }
      onClick={() => {
        handleBtn(storeNumber);
      }}
    >
      {textBtn}
    </button>
  );
}

export default BtnExtraDetails;
