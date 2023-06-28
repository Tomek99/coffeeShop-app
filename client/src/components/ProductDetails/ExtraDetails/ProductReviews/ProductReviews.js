import React, { useEffect, useState } from "react";
import styles from "./ProductReviews.module.scss";
import axios from "axios";
import LoaderSpinner from "../../../LoaderSpinner/LoaderSpinner";
import { useParams } from "react-router-dom";
import ProductReview from "./ProductReview/ProductReview";

function ProductReviews({ loading, reviews }) {
  return (
    <div className={styles.ProductReviews}>
      {loading ? (
        <LoaderSpinner loading={loading} />
      ) : reviews.length !== 0 ? (
        reviews.map((item, i) => <ProductReview key={i} item={item} />)
      ) : (
        <p className={styles.noReviews}>No reviews</p>
      )}
    </div>
  );
}

export default ProductReviews;
