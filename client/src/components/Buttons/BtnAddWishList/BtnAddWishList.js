import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./BtnAddWishList.module.css";
function BtnAddWishList() {
  return (
    <button className={styles.BtnAddWishList}>
      <AiOutlineHeart /> Add to wish list
    </button>
  );
}

export default BtnAddWishList;
