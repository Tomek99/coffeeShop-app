import React from "react";
import styles from "./AccountData.module.scss";

function AccountData({ text, btnText, content, fullName }) {
  console.log(btnText === "Edit");
  return (
    <div className={styles.AccountData}>
      <p>{text}</p>
      <div>
        <div>
          {btnText === "Edit" ? <p>{fullName}</p> : null}
          <p>{content}</p>
        </div>
        <div>
          <button>{btnText}</button>
        </div>
      </div>
    </div>
  );
}

export default AccountData;
