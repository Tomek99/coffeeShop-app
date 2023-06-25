import React, { useEffect } from "react";
import { useState } from "react";
import Additionalinformation from "./AdditionalInforamtion/Additionalinformation";
import Description from "./Description/Description";
import styles from "./ExtraDetails.module.scss";
import ProductReviews from "./ProductReviews/ProductReviews";
import axios from "axios";

function ExtraDetails({ productId }) {
  const [tabNumber, setTabNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  const switchTab = (tabNumber) => {
    setTabNumber(tabNumber);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const products = await axios.get(
          `${process.env.REACT_APP_API_URI}/api/reviews/product-reviews/${productId}`
        );

        setReviews(
          products.data.filter((item) => item.isCheckedReview !== false)
        );
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
          Product reviews
        </button>
      </div>
      {(() => {
        switch (tabNumber) {
          case 1:
            return <Additionalinformation />;
          case 2:
            return <ProductReviews reviews={reviews} loading={loading} />;
          default:
            return <Description />;
        }
      })()}
    </div>
  );
}

export default ExtraDetails;
