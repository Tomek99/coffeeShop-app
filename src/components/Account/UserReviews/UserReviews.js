import React, { useEffect } from "react";
import styles from "./UserReviews.module.scss";
import Support from "../Support/Support";
import Review from "./Review/Review";
import Product from "./Product/Product";

function UserReviews() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <header style={{ fontSize: "2.5rem" }}>Reviews</header>
      <div className={styles.divRow}>
        <h2>Give feedback</h2>
        <span>&nbsp;(5)</span>
      </div>
      <div className={styles.divColumn}>
        <Product />
        <Product />
        <Product />
      </div>
      <div className={styles.divRow}>
        <h2>Your reviews</h2>
        <span>&nbsp;(1)</span>
      </div>
      <div className={styles.divColumn}>
        <Review />
        <Review />
        <Review />
      </div>
      <Support />
    </>
  );
}

export default UserReviews;
