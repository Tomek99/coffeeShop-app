import React from "react";
import styles from "./AdminIconBtn.module.scss";
import { ImBin } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegCheckCircle } from "react-icons/fa";

function AdminIconBtn({ handleBtn, btnType, action }) {
  return (
    <button
      type="button"
      className={styles.AdminIconBtn}
      onClick={() => {
        handleBtn(action);
      }}
    >
      {(() => {
        switch (btnType) {
          case "BsEye":
            return <BsEye size={25} />;
          case "CiEdit":
            return <CiEdit size={25} />;
          case "ImBin":
            return <ImBin size={25} />;
          case "TiDeleteOutline":
            return <TiDeleteOutline size={25} color="var(--red)" />;
          case "FaRegCheckCircle":
            return <FaRegCheckCircle size={25} color="var(--green)" />;
          default:
            return null;
        }
      })()}
    </button>
  );
}

export default AdminIconBtn;
