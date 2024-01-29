import React from "react";
import styles from "./AdminUserRaitingFormDecision.module.scss";

function AdminUserRaitingFormDecision({ handleDecision }) {
  return (
    <div className={styles.AdminUserRaitingFormDecision}>
      <label>
        <input
          type="radio"
          id="approve"
          name="decision"
          value="approved"
          onChange={handleDecision}
        />
        Approve
      </label>
      <label>
        <input
          type="radio"
          id="reject"
          name="decision"
          value="rejected"
          onChange={handleDecision}
        />
        Reject
      </label>
    </div>
  );
}

export default AdminUserRaitingFormDecision;
