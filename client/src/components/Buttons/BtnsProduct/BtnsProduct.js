import React from "react";
import styles from "./BtnsProduct.module.scss";
import { BsEye, BsCart, BsHeart } from "react-icons/bs";

function BtnsProduct({ item, wishList, navigatePage, addItem, addWishItem }) {
  let foundWishProduct = wishList.find((value) => {
    if (value === item._id) return true;
    return false;
  });

  function handleCart(event) {
    event.stopPropagation();
    addItem(item);
  }

  function handleDisplayPage(event) {
    event.stopPropagation();
    navigatePage();
  }

  function handleWishList(event) {
    event.stopPropagation();
    addWishItem(item._id);
  }

  return (
    <div className={styles.BtnsProduct}>
      <button onClick={(e) => handleDisplayPage(e)}>
        <BsEye />
      </button>

      <button onClick={(e) => handleCart(e)}>
        <BsCart />
      </button>
      <button
        className={foundWishProduct ? styles.activeBtn : null}
        onClick={(e) => handleWishList(e)}
      >
        <BsHeart />
      </button>
    </div>
  );
}

export default BtnsProduct;
