import React from "react";
import styles from "./AdminActionBtns.module.scss";
import { CiEdit } from "react-icons/ci";
import { ImBin } from "react-icons/im";
import { BsEye } from "react-icons/bs";
function AdminActionBtns({ handleAdminProductDetails }) {
  return (
    <div className={styles.AdminActionBtns}>
      <button
        className={styles.adminActionBtn}
        onClick={handleAdminProductDetails}
      >
        <BsEye size={25} />
      </button>
      <button className={styles.adminActionBtn}>
        <CiEdit size={25} />
      </button>
      <button className={styles.adminActionBtn}>
        <ImBin size={25} />
      </button>
    </div>
  );
}

export default AdminActionBtns;
