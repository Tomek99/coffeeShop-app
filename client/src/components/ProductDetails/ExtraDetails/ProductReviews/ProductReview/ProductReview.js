import React from "react";
import styles from "./ProductReview.module.scss";
import RatingStars from "../../../../RatingStars/RatingStars";
import { AiOutlineCheckCircle } from "react-icons/ai";
import DateDiff from "../../../../DataDiff/DataDiff";
import BtnThumbs from "../../../../Buttons/BtnThumbs/BtnThumbs";

function ProductReview({ item }) {
  return (
    <div className={styles.ProductReview}>
      <div className={styles.divLeftCol}>
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
          <DateDiff reviewDate={item.userReviewDate} />
        </div>
        <p className={styles.userComment}>{item.comment} s </p>
        <div className={styles.mark}>
          <span className={styles.text}>Was this review helpful?</span>
          <BtnThumbs item={item} isDisabled={false} />
        </div>
      </div>
    </div>
  );
}

<div className={styles.purchaseConfirmed}></div>;
export default ProductReview;
