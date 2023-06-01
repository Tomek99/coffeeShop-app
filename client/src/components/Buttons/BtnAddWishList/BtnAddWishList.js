import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./BtnAddWishList.module.css";
import { Context } from "../../../Contexts/Context";
import { useNavigate } from "react-router-dom";
function BtnAddWishList({ handleBtn, id }) {
  const { wishList } = useContext(Context);
  const foundElement = wishList.find((value) => value === id);

  const navigate = useNavigate();
  function navigatePage() {
    navigate(`/wish-list`);
  }

  if (foundElement)
    return (
      <button className={styles.BtnAddWishList} onClick={() => navigatePage()}>
        <AiOutlineHeart /> Review wish list
      </button>
    );
  else
    return (
      <button className={styles.BtnAddWishList} onClick={() => handleBtn(id)}>
        <AiOutlineHeart />
        Add to wish list
      </button>
    );
}

export default BtnAddWishList;
