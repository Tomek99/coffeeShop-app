import React from "react";
import styles from "./AdminCheckingReviewItem.module.scss";
import AdminTextBtn from "../../../AdminBtns/AdminTextBtn/AdminTextBtn";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import RatingsStars from "../../../../RatingStars/RatingStars";

function AdminCheckingReviewItem({ item }) {
  function handleCheckingReview(action) {
    console.log(action);
    console.log(item);
  }
  return (
    <section className={styles.AdminCheckingReviewItem}>
      <div className={styles.checkingReviewContent}>
        <div className={styles.columnItem}>
          <h1 className={styles.reviewItemHeader}>Review id: {item._id}</h1>
          <span
            style={{ display: "flex", alignItems: "center" }}
            className={styles.reviewItemHeader}
          >
            Review status:{" "}
            <HiOutlineQuestionMarkCircle size={25} color="var(--main-color)" />
          </span>
          <span>Product id:{item.productId}</span>
          <span>Product name:{item.productName}</span>
          <span>User id: {item.userId}</span>
          <span>User Name: {item.userName}</span>
        </div>
        <div className={styles.columnItem}>
          <span>Review date: {item.userReviewDate}</span>
          <span className={styles.ratingSpan}>
            Rate:
            <RatingsStars tab={0} rate={item.rate} size={"medium"} />
          </span>
          <p>Comment: {item.comment}</p>
        </div>
      </div>
      <div className={styles.btnsAction}>
        <AdminTextBtn
          handleBtn={handleCheckingReview}
          textBtn="Confirm"
          action="confirm"
        />
        <AdminTextBtn
          handleBtn={handleCheckingReview}
          textBtn="Reject"
          action="reject"
        />
      </div>
    </section>
  );
}

export default AdminCheckingReviewItem;
