import React, { useEffect } from "react";
import styles from "./UserReviews.module.scss";
import Support from "../Support/Support";
import Review from "./Review/Review";
import Feedback from "./Feedback/Feedback";
import HeaderInfo from "../../HeaderInfo/HeaderInfo";
import HeadingThree from "../../HeadingThree/HeadingThree";

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
      <HeaderInfo title="Reviews" />
      <div className={styles.divRow}>
        <HeadingThree title="Give feedback" />
        <span>&nbsp;(5)</span>
      </div>
      <div className={styles.divColumn}>
        <Feedback />
        <Feedback />
        <Feedback />
      </div>
      <div className={styles.divRow}>
        <HeadingThree title="Your reviews" />
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
