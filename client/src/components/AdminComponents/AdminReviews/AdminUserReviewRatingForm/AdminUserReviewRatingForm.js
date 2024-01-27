import React, { useState } from "react";
import styles from "./AdminUserReviewRatingForm.module.scss";
import AdminTextBtn from "../../AdminBtns/AdminTextBtn/AdminTextBtn";
import AdminUserReviewRatingFormRejectedOptions from "./AdminUserRatingFormRejectedOptions/AdminUserReviewRatingFormRejectedOptions";
import AdminUserRaitingFormDecision from "./AdminUserRaitingFormDecision/AdminUserRaitingFormDecision";

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

  return (
    <form className={styles.AdminUserReviewRatingForm}>
      <AdminUserRaitingFormDecision handleDecision={handleDecision} />
      {decision === "rejected" ? (
        <AdminUserReviewRatingFormRejectedOptions
          selectedReason={selectedReason}
          handleSelectChange={handleSelectChange}
          handleComment={handleComment}
        />
      ) : null}
      {["approved", "rejected"].includes(decision) ? (
        <AdminTextBtn
          handleBtn={"handleCheckingReview"}
          textBtn="Confirm"
          action="confirm"
          typeBtn="button"
        />
      ) : null}
    </form>
  );
}

export default AdminUserReviewRatingForm;
