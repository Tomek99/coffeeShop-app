import React from "react";
import styles from "./AdminTextBtn.module.scss";

function AdminTextBtn({ handleBtn, textBtn, action, typeBtn = "button" }) {
  return (
    <button
      type={typeBtn}
      className={
        action === "confirm"
          ? `${styles.AdminTextBtn} ${styles.confirmText}`
          : `${styles.AdminTextBtn} ${styles.rejectText}`
      }
      onClick={handleBtn}
    >
      {textBtn}
    </button>
  );
}

export default AdminTextBtn;
