import React from "react";
import { useState } from "react";
import Additionalinformation from "./AdditionalInforamtion/Additionalinformation";
import Description from "./Description/Description";
import styles from "./ExtraDetails.module.scss";
import ReviewProduct from "./ReviewProduct/ReviewProduct";

function ExtraDetails() {
  const [pageNumber, setPageNumber] = useState(0);

  const handlePageNumber = (pageNumber) => {
    setPageNumber(pageNumber);
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
          className={pageNumber === 0 ? styles.btn : null}
          onClick={() => {
            handlePageNumber(0);
          }}
        >
          Description
        </button>
        <button
          className={pageNumber === 1 ? styles.btn : null}
          onClick={() => {
            handlePageNumber(1);
          }}
        >
          Additional information
        </button>
        <button
          className={pageNumber === 2 ? styles.btn : null}
          onClick={() => {
            handlePageNumber(2);
          }}
        >
          Review product
        </button>
      </div>
      {(() => {
        switch (pageNumber) {
          case 0:
            return <Description />;
          case 1:
            return <Additionalinformation />;
          case 2:
            return <ReviewProduct />;

          default:
            return null;
        }
      })()}
    </div>
  );
}

export default ExtraDetails;
