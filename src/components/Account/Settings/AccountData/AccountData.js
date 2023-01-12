import React from "react";
import styles from "./AccountData.module.scss";

function AccountData({ title, btnText, content, fullName }) {
  return (
    <div className={styles.AccountData}>
      <p className={styles.title}>{title}</p>
      <div className={styles.divRowUserData}>
        <div className={styles.line}>
          {btnText === "Edit" ? (
            <p style={{ fontWeight: "bold" }}>{fullName}</p>
          ) : null}
          {btnText === "Edit" ? <p>tel. {content}</p> : <p>{content}</p>}
        </div>
        <button className={styles.btnEdit}>{btnText}</button>
      </div>
    </div>
  );
}

export default AccountData;
