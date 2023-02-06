import React from "react";
import { Link } from "react-router-dom";
import styles from "./Feedback.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import RatingsStars from "../../../RatingStars/RatingStars";

function Feedback() {
  return (
    <div className={styles.Product}>
      <div className={styles.divRowFirst}>
        <div className={styles.divImg}>
          <img src="/images/product-1.png" alt="a" />
        </div>
        <div className={styles.generalInfo}>
          <Link className={styles.showMore} style={{ color: "#fff" }}>
            Fresh Cofee
          </Link>
          <Link className={styles.showMore} style={{ color: "#ccc" }}>
            4 month ago
          </Link>
        </div>
      </div>
      <div className={styles.divRowSecond}>
        <button className={styles.btnDots}>
          <BsThreeDotsVertical size={20} />
        </button>
        <div className={styles.rating}>
          <RatingsStars size="large" rate={null} name="no-value" tab={1} />
        </div>

        <button className={styles.btnFeedback}>Give feedback</button>
      </div>
    </div>
  );
}

export default Feedback;
