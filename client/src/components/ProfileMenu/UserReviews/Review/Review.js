import React from "react";
import styles from "./Review.module.scss";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import RatingsStars from "../../../RatingStars/RatingStars";
import BtnDots from "../../../Buttons/BtnDots/BtnDots";
import DataDiff from "../../../DataDiff/DataDiff";

function Review({ item }) {
  return (
    <div className={styles.Review}>
      <div className={styles.divRow}>
        <div className={styles.firstDiv}>
          <div className={styles.imgAndTitle}>
            <img
              src={item.productImage}
              alt={item.productName}
              className={styles.imgReviewProduct}
            />
            <p></p>
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
              <p className={styles.title}>{item.productName}</p>
              <div className={styles.ratingAndData}>
                <RatingsStars size="large" rate={item.rate} tab={0} />
                <DataDiff reviewDate={item.userReviewDate} />
              </div>
            </div>
            <p className={styles.comment}>{item.comment}</p>
          </div>
          <div className={styles.mark}>
            <span className={styles.text}>Was this review helpful?</span>
            <div className={styles.thumbs}>
              <BsHandThumbsUp size={20} className={styles.thumb} />
              <span>{item.likes}</span>
              <BsHandThumbsDown className={styles.thumb} size={20} />
              <span>{item.dislikes}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdDiv}>
        <BtnDots />
      </div>
    </div>
  );
}

export default Review;
