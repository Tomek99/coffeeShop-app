import React, { useEffect } from "react";
import styles from "./UserReviews.module.scss";
import Support from "../Support/Support";
import Review from "./Review/Review";
import Feedback from "./Feedback/Feedback";

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
        <Feedback />
        <Feedback />
        <Feedback />
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
