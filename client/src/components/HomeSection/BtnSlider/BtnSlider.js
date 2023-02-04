import React from "react";
import styles from "./BtnSlider.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function BtnSlider({ handlerBtn, arrowDirect }) {
  return (
    <div className={styles.btnDiv}>
      <button
        className={`${styles.btnArrow} ${
          arrowDirect === "right" ? styles.btnArrowRight : styles.btnArrowLeft
        }`}
        onClick={handlerBtn}
      >
        {arrowDirect === "right" ? (
          <SlArrowRight color="#fff" size={40} />
        ) : (
          <SlArrowLeft color="#fff" size={40} />
        )}
      </button>
    </div>
  );
}

export default BtnSlider;
