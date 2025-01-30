import React from "react";
import styles from "./BtnChangePage.module.scss";

function BtnChangePage({ handlePage, selectedpage, textBtn, adjustedPage }) {
  return (
    <button
      onClick={() => handlePage(adjustedPage)}
      className={
        selectedpage === adjustedPage
          ? `${styles.BtnChangePage} ${styles.clickedButton}`
          : `${styles.BtnChangePage}`
      }
    >
      {textBtn}
    </button>
  );
}

export default BtnChangePage;
