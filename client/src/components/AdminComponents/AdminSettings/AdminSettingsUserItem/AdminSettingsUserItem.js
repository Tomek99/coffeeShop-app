import React from "react";
import styles from "./AdminSettingsUserItem.module.scss";
import AdminTextBtn from "../../AdminBtns/AdminTextBtn/AdminTextBtn";
import deleteDataUtil from "../../../../utils/deleteDataUtil";
import maskedHashUtil from "../../../../utils/maskedHashUtil";

function AdminSettingsUserItem({ item }) {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/admin/deleteUser`;
  const maskedHash = maskedHashUtil(item.adminPassword);

  function handleBtn() {
    deleteDataUtil(apiEndpoint, item._id);
    window.location.reload();
  }

  return (
    <div className={styles.AdminSettingsUserItem}>
      <div className={styles.userItemContent}>
        <p>
          <b>Id:</b> {item._id}
        </p>
        <p>
          <b>Name: </b>
          {item.adminName}
        </p>
        <p>
          <b>Login: </b>
          {item.adminLogin}
        </p>
        <p>
          <b>Mode: </b>
          {item.adminMode}
        </p>
        <p>
          <b>Password:</b> {maskedHash}
        </p>
        <p>
          <b>Created:</b> {item.createdAt}
        </p>
        <p>
          <b>Updated:</b> {item.updatedAt}
        </p>
      </div>

      <button onClick={handleBtn} className={styles.btnDeleteUser}>
        Delete
      </button>
    </div>
  );
}

export default AdminSettingsUserItem;
