import React from "react";
import styles from "./AdminTextBtn.module.scss";

function AdminTextBtn({ handleBtn, textBtn, action }) {
  return (
    <button
      type="button"
      className={
        action === "confirm"
          ? `${styles.AdminTextBtn} ${styles.confirmText}`
          : `${styles.AdminTextBtn} ${styles.rejectText}`
      }
      onClick={() => handleBtn(action)}
    >
      {textBtn}
    </button>
  );
}

export default AdminTextBtn;
