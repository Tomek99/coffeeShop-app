import React from "react";
import styles from "./AdminUserReviewRatingFormRejectedOptions.module.scss";

function AdminUserReviewRatingFormRejectedOptions({
  selectedReason,
  handleSelectChange,
  handleComment,
}) {
  return (
    <div className={styles.AdminUserReviewRatingFormRejectedOptions}>
      <select
        name="rejection_reason"
        value={selectedReason}
        onChange={handleSelectChange}
        className={styles.selectOptions}
      >
        <option value="inappropriate_content">Inappropriate Content</option>
        <option value="spam">Spam or Advertising</option>
        <option value="irrelevant">Irrelevant to the Product</option>
        <option value="offensive_language">Offensive Language</option>
        <option value="duplicate">Duplicate Review</option>
        <option value="misleading_information">Misleading Information</option>
        <option value="other">Other (Please Specify)</option>
      </select>

      <textarea
        maxLength={999}
        className={styles.adornTextArea}
        placeholder="Enter addition data"
        onChange={handleComment}
      />
    </div>
  );
}

export default AdminUserReviewRatingFormRejectedOptions;
