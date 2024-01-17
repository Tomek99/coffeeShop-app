import React from "react";
import styles from "./AdminActionBtns.module.scss";
import { CiEdit } from "react-icons/ci";
import { ImBin } from "react-icons/im";
import { BsEye } from "react-icons/bs";
function AdminActionBtns({ handleAction }) {
  return (
    <div className={styles.AdminActionBtns}>
      <button
        className={styles.adminActionBtn}
        onClick={() => handleAction("viewDetails")}
      >
        <BsEye size={25} />
      </button>
      <button
        className={styles.adminActionBtn}
        onClick={() => handleAction("editDetails")}
      >
        <CiEdit size={25} />
      </button>
      <button
        className={styles.adminActionBtn}
        onClick={() => handleAction("deleteProduct")}
      >
        <ImBin size={25} />
      </button>
    </div>
  );
}

export default AdminActionBtns;
