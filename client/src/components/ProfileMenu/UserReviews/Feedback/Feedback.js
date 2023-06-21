import React from "react";
import { Link } from "react-router-dom";
import styles from "./Feedback.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import RatingsStars from "../../../RatingStars/RatingStars";
import BtnDots from "../../../Buttons/BtnDots/BtnDots";
import BtnFeedback from "../../../Buttons/BtnFeedback/BtnFeedback";

function Feedback() {
  return (
    <div className={styles.Product}>
      <div className={styles.divRowFirst}>
        <div className={styles.divImg}>
          <img src="/images/product-1.png" alt="a" />
        </div>
        <div className={styles.generalInfo}>
          <Link
            className={styles.showMore}
            style={{ color: "var(--text-color)" }}
          >
            Fresh Cofee
          </Link>
          <Link
            className={styles.showMore}
            style={{ color: "var(--text-color)" }}
          >
            4 month ago
          </Link>
        </div>
      </div>
      <div className={styles.divRowSecond}>
        <BtnDots />
        <div className={styles.rating}>
          <RatingsStars size="large" rate={null} name="no-value" tab={1} />
        </div>

        <BtnFeedback />
      </div>
    </div>
  );
}

export default Feedback;
