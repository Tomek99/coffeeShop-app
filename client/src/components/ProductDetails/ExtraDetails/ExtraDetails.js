import React from "react";
import { useState } from "react";
import Additionalinformation from "./AdditionalInforamtion/Additionalinformation";
import Description from "./Description/Description";
import styles from "./ExtraDetails.module.scss";
import ReviewProduct from "./ReviewProduct/ReviewProduct";

function ExtraDetails() {
  const [tabNumber, setTabNumber] = useState(0);

  const switchTab = (tabNumber) => {
    setTabNumber(tabNumber);
  };

  // const handleClick = (event) => {
  //   if (event.target.style.textDecoration) {
  //     event.target.style.removeProperty("text-decoration");
  //   } else {
  //     event.target.style.setProperty("text-decoration", "line-through");
  //   }
  // };

  return (
    <div className={styles.ExtraDetails}>
      <div className={styles.ExtraDetailsBtn}>
        <button
          className={tabNumber === 0 ? styles.btn : null}
          onClick={() => {
            switchTab(0);
          }}
        >
          Description
        </button>
        <button
          className={tabNumber === 1 ? styles.btn : null}
          onClick={() => {
            switchTab(1);
          }}
        >
          Additional information
        </button>
        <button
          className={tabNumber === 2 ? styles.btn : null}
          onClick={() => {
            switchTab(2);
          }}
        >
          Review product
        </button>
      </div>
      {(() => {
        switch (tabNumber) {
          case 1:
            return <Additionalinformation />;
          case 2:
            return <ReviewProduct />;
          default:
            return <Description />;
        }
      })()}
    </div>
  );
}

export default ExtraDetails;
