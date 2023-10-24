import React, { useContext, useState } from "react";
import styles from "./ProductReview.module.scss";
import RatingStars from "../../../../RatingStars/RatingStars";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import DateDiff from "../../../../DataDiff/DataDiff";
import axios from "axios";
import { Context } from "../../../../../Contexts/Context";

function ProductReview({ item }) {
  const { notify, notifyError, user } = useContext(Context);
  console.log(user._id);
  const [likes, setLikes] = useState(item.likes);
  const [dislikes, setDislikes] = useState(item.dislikes);

  async function handleThumb(rate) {
    if (user._id) {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URI}/api/reviews/rate-review`,
        {
          reviewId: item._id,
          userId: user._id,
          rate,
        }
      );

      if (res.data) {
        if (rate !== "0") setLikes(likes + 1);
        else {
          setDislikes(dislikes + 1);
        }
        notify("Thank you for your vote");
      } else {
        notifyError("You can only vote once for each comment");
      }
    } else {
      notifyError("You cannot vote if you are not logged in.");
    }
  }

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
          <div className={styles.thumbs}>
            <button
              className={styles.thumb}
              onClick={() => handleThumb("1")}
              data-cy="thumbUpBtn"
            >
              <BsHandThumbsUp size={20} className={styles.thumb} />
            </button>
            <span>{likes}</span>
            <button
              className={styles.thumb}
              onClick={() => handleThumb("0")}
              data-cy="thumbDownBtn"
            >
              {" "}
              <BsHandThumbsDown className={styles.thumb} size={20} />
            </button>
            <span>{dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

<div className={styles.purchaseConfirmed}></div>;
export default ProductReview;
