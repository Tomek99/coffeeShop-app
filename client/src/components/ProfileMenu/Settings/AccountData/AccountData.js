import React from "react";
import styles from "./AccountData.module.scss";
import PropTypes from "prop-types";

function AccountData({ item, handleActive }) {
  const { title, btnText, content, fullName, active } = item;
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
        <button className={styles.btnEdit} onClick={() => handleActive(active)}>
          {btnText}
        </button>
      </div>
    </div>
  );
}

AccountData.propTypes = {
  title: PropTypes.string,
  btnText: PropTypes.string,
  content: PropTypes.string,
  fullName: PropTypes.string,
  active: PropTypes.string,
  handleActive: PropTypes.func,
};
export default AccountData;
