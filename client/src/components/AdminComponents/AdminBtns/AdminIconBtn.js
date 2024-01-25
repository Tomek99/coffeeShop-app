import React from "react";
import styles from "./AdminIconBtn.module.scss";
import { ImBin } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import { BsEye } from "react-icons/bs";

function AdminIconBtn({ handleBtn, btnType, btnAction }) {
  return (
    <button
      type="button"
      className={styles.AdminIconBtn}
      onClick={() => {
        handleBtn(btnAction);
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

          default:
            return null;
        }
      })()}
    </button>
  );
}

export default AdminIconBtn;
