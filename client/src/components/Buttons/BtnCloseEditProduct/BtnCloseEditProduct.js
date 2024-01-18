import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./BtnCloseEditProduct.module.scss";
function BtnCloseEditProduct({ handleBtn }) {
  return (
    <button
      type="button"
      className={styles.BtnCloseEditProduct}
      onClick={handleBtn}
    >
      <IoCloseSharp size={30} />
    </button>
  );
}

export default BtnCloseEditProduct;
