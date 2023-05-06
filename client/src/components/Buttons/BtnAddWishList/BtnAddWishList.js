import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./BtnAddWishList.module.css";
function BtnAddWishList({ handleBtn, id }) {
  return (
    <button className={styles.BtnAddWishList} onClick={() => handleBtn(id)}>
      <AiOutlineHeart /> Add to wish list
    </button>
  );
}

export default BtnAddWishList;
