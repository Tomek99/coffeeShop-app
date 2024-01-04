import React, { useEffect, useState } from "react";
import styles from "./ProductReviews.module.scss";
import LoaderSpinner from "../../../LoaderSpinner/LoaderSpinner";
import ProductReview from "./ProductReview/ProductReview";

function ProductReviews({ loading, reviews }) {
  return (
    <div className={styles.ProductReviews}>
      {loading ? (
        <LoaderSpinner loading={loading} />
      ) : reviews.length !== 0 ? (
        reviews
          .sort(
            (a, b) => new Date(b.userReviewDate) - new Date(a.userReviewDate)
          )
          .map((item, i) => <ProductReview key={i} item={item} />)
      ) : (
        <p className={styles.noReviews}>No reviews</p>
      )}
    </div>
  );
}

export default ProductReviews;
