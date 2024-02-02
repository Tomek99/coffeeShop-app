import React, { useState } from "react";
import styles from "./AdminUserReviewRatingForm.module.scss";
import AdminTextBtn from "../../AdminBtns/AdminTextBtn/AdminTextBtn";
import AdminUserReviewRatingFormRejectedOptions from "./AdminUserRatingFormRejectedOptions/AdminUserReviewRatingFormRejectedOptions";
import AdminUserRaitingFormDecision from "./AdminUserRaitingFormDecision/AdminUserRaitingFormDecision";
import putDataUtil from "../../../../utils/putDataUtil";

function AdminUserReviewRatingForm({ item }) {
  const [decision, setDecision] = useState("checking");
  const [selectedReason, setSelectedReason] = useState("inappropriate_content");
  const [comment, setComment] = useState("");

  function handleDecision(e) {
    setDecision(e.target.value);
  }

  function handleSelectChange(e) {
    setSelectedReason(e.target.value);
  }

  function handleComment(e) {
    setComment(e.target.value);
  }

  async function handleCheckingReview() {
    const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/reviews/put-review-decision`;
    const response = await putDataUtil(apiEndpoint, {
      id: item._id,
      decision,
      selectedReason,
      comment,
    });

    window.location.reload();
  }

  return (
    <form className={styles.AdminUserReviewRatingForm}>
      <AdminUserRaitingFormDecision handleDecision={handleDecision} />
      <AdminUserReviewRatingFormRejectedOptions
        selectedReason={selectedReason}
        handleSelectChange={handleSelectChange}
        handleComment={handleComment}
      />
      {["approved", "rejected"].includes(decision) ? (
        <AdminTextBtn
          handleBtn={handleCheckingReview}
          textBtn="Confirm"
          action="confirm"
          typeBtn="button"
        />
      ) : null}
    </form>
  );
}

export default AdminUserReviewRatingForm;
