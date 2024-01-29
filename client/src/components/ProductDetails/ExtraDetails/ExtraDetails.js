import React, { useEffect } from "react";
import { useState } from "react";
import Additionalinformation from "./AdditionalInforamtion/Additionalinformation";
import Description from "./Description/Description";
import styles from "./ExtraDetails.module.scss";
import ProductReviews from "./ProductReviews/ProductReviews";
import axios from "axios";
import useFetchData from "../../../hooks/useFetchData";
import BtnExtraDetails from "../../Buttons/BtnExtraDetails/BtnExtraDetails";

function ExtraDetails({ productId }) {
  const endPoint = `${process.env.REACT_APP_API_URI}/api/reviews/product-reviews/${productId}`;
  const { isLoaded, data } = useFetchData(endPoint);
  const productReviews = data.filter((item) =>
    item.isModeratorApprovedReview.includes("approved")
  );

  const [tabNumber, setTabNumber] = useState(0);
  const switchTab = (tabNumber) => {
    setTabNumber(tabNumber);
  };

  return (
    <div className={styles.ExtraDetails}>
      <div className={styles.ExtraDetailsBtn}>
        <BtnExtraDetails
          textBtn="Description"
          handleBtn={switchTab}
          tabNumber={tabNumber}
          storeNumber={0}
        />
        <BtnExtraDetails
          textBtn="Additional information"
          handleBtn={switchTab}
          tabNumber={tabNumber}
          storeNumber={1}
        />

        <div>
          {" "}
          <BtnExtraDetails
            textBtn=" Product reviews"
            handleBtn={switchTab}
            tabNumber={tabNumber}
            storeNumber={2}
          />
          <span className={styles.reviewsLength}>
            {" "}
            ({productReviews.length})
          </span>
        </div>
      </div>
      {(() => {
        switch (tabNumber) {
          case 0:
            return <Description />;
          case 1:
            return <Additionalinformation />;
          case 2:
            return (
              <ProductReviews reviews={productReviews} loading={isLoaded} />
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default ExtraDetails;
