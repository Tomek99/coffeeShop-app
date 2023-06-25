import React, { useEffect, useState } from "react";
import styles from "./ProductReviews.module.scss";
import axios from "axios";
import LoaderSpinner from "../../../LoaderSpinner/LoaderSpinner";
import { useParams } from "react-router-dom";
import ProductReview from "./ProductReview/ProductReview";

function ProductReviews({ loading, reviews }) {
  return (
    <div>
      {loading ? (
        <LoaderSpinner loading={loading} />
      ) : reviews.length !== 0 ? (
        reviews.map((item) => <ProductReview />)
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
}

export default ProductReviews;
