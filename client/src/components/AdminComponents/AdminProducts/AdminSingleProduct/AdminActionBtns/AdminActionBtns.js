import React from "react";
import styles from "./AdminActionBtns.module.scss";
import { CiEdit } from "react-icons/ci";
import { ImBin } from "react-icons/im";
import { BsEye } from "react-icons/bs";
function AdminActionBtns() {
  return (
    <div className={styles.AdminActionBtns}>
      <button>
        <BsEye size={25} />
      </button>
      <button>
        <CiEdit size={25} />
      </button>
      <button>
        <ImBin size={25} />
      </button>
    </div>
  );
}

export default AdminActionBtns;
