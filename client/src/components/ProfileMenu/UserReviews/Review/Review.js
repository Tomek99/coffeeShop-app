import React from "react";
import styles from "./Review.module.scss";
import {
  BsThreeDotsVertical,
  BsHandThumbsUp,
  BsHandThumbsDown,
} from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import RatingsStars from "../../../RatingStars/RatingStars";

function Review() {
  return (
    <div className={styles.Review}>
      <div className={styles.divRow}>
        <div className={styles.firstDiv}>
          <div className={styles.imgAndTitle}>
            <img
              src="/images/product-1.png"
              alt=""
              className={styles.imgReviewProduct}
            />
            <p>Fresh coffee</p>
          </div>
          <div className={styles.purchaseConfirmed}>
            <span>
              <AiOutlineCheckCircle
                size={25}
                style={{ color: "rgb(51, 220, 32)" }}
              />
            </span>
            <p>&nbsp;Purchase confirmed </p>
          </div>
        </div>
        <div className={styles.secondDiv}>
          <div className={styles.content}>
            <div className={styles.headline}>
              <p className={styles.title}>Fresh Cofee</p>
              <div className={styles.ratingAndData}>
                <RatingsStars size="medium" rate={4} tab={0} />
                <span>2 years ago</span>
              </div>
            </div>
            <p className={styles.comment}>
              The best coffee beans in the world!!!
            </p>
          </div>
          <div className={styles.mark}>
            <span className={styles.text}>Was this review helpful?</span>
            <div className={styles.thumbs}>
              <button className={styles.thumb}>
                <BsHandThumbsUp size={20} />
              </button>
              <span>0</span>
              <button className={styles.thumb}>
                <BsHandThumbsDown size={20} />
              </button>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdDiv}>
        <button className={styles.btnDots}>
          <BsThreeDotsVertical size={20} color="#fff" />
        </button>
      </div>
    </div>
  );
}

export default Review;
