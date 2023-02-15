import React from "react";
import BtnCancell from "../../../Buttons/BtnCancell/BtnCancell";
import BtnRemoveData from "../../../Buttons/BtnRemoveData/BtnRemoveData";
import styles from "./DeleteData.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import CloseBtn from "../../../Buttons/CloseBtn/CloseBtn";

function DeleteData({ handleBlurScreen }) {
  return (
    <div className={styles.DeleteData}>
      <div className={styles.firstRowDiv}>
        <h3>Are you sure you want to delete this data?</h3>
        <CloseBtn handleBlurScreen={handleBlurScreen} />
      </div>
      <p>
        If you do this, you will not be able to select them when placing a new
        order.
      </p>
      <div className={styles.btnsDiv}>
        <BtnCancell handleBlurScreen={handleBlurScreen} />
        <BtnRemoveData />
      </div>
    </div>
  );
}

export default DeleteData;
