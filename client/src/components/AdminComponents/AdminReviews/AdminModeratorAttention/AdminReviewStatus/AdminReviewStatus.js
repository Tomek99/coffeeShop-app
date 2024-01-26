import React from "react";
import styles from "./AdminReviewStatus.module.scss";

import {
  IoIosCheckmarkCircleOutline,
  IoIosHelpCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";

function AdminReviewStatus({ status }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      className={styles.reviewItemHeader}
    >
      <span>Review status:</span>{" "}
      {(() => {
        switch (status) {
          case "checking":
            return (
              <IoIosHelpCircleOutline size={25} color="var(--main-color)" />
            );
          case "approved":
            return (
              <IoIosCheckmarkCircleOutline size={25} color="var(--green)" />
            );

          case "rejected":
            return <IoMdCloseCircleOutline size={25} color="var(--red)" />;

          default:
            return null;
        }
      })()}
    </div>
  );
}

export default AdminReviewStatus;
