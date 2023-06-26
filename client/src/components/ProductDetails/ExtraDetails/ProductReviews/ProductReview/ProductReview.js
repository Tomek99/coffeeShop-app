import React from "react";
import styles from "./ProductReview.module.scss";
import RatingStars from "../../../../RatingStars/RatingStars";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import DateDiff from "../../../../DataDiff/DataDiff";

function ProductReview({ item }) {
  return (
    <div className={styles.ProductReview}>
      <div>
        <div className={styles.userImgDiv}>
          <img
            src="/images/reviewUserAvatar.svg"
            alt="userAvatar"
            className={styles.avatarImg}
          />
          <span className={styles.userNameDesktop}>{item.userName}</span>
        </div>

        <div className={styles.purchaseConfirmed}>
          <span>
            <AiOutlineCheckCircle
              size={25}
              style={{ color: "rgb(51, 220, 32)" }}
            />
          </span>
          <span className={styles.spanText}>&nbsp;Purchase confirmed </span>
        </div>
      </div>
      <div className={styles.productReviewRightDiv}>
        <div className={styles.mobileContentDiv}>
          <span className={styles.userNameMobile}>{item.userName}</span>
          <span>
            <AiOutlineCheckCircle
              size={25}
              style={{ color: "rgb(51, 220, 32)" }}
            />
          </span>
          <span className={styles.spanText}>&nbsp;Purchase confirmed </span>
        </div>
        <div className={styles.ratingContent}>
          <RatingStars size={"large"} tab={0} rate={item.rate} />
          <DateDiff reviewDate={item.createdAt} />
        </div>
        <p className={styles.userComment}>{item.comment} s </p>
        <div className={styles.mark}>
          <span className={styles.text}>Was this review helpful?</span>
          <div className={styles.thumbs}>
            <button className={styles.thumb}>
              <BsHandThumbsUp size={20} className={styles.thumb} />
            </button>
            <span>{item.likes}</span>
            <button className={styles.thumb}>
              {" "}
              <BsHandThumbsDown className={styles.thumb} size={20} />
            </button>
            <span>{item.dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

<div className={styles.purchaseConfirmed}></div>;
export default ProductReview;
