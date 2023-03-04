import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import styles from "./ConciseInfo.module.scss";

function ConciseInfo({ text }) {
  return (
    <div className={styles.ConciseInfo}>
      <span>
        <HiOutlineInformationCircle size={20} />
      </span>
      <p>{text}</p>
    </div>
  );
}

export default ConciseInfo;
