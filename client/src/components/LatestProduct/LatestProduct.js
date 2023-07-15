import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Contexts/Context";
import { BsEye, BsCart, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styles from "./LatestProduct.module.scss";
import PropTypes from "prop-types";
import RatingsStars from "../RatingStars/RatingStars";

function LatestProduct({ item, cartFillId, showProductId, wishlistId }) {
  const { _id, imageUrl, name, price, oldPrice, rate, intensity } = item;
  const { addItem, addWishItem, wishList } = useContext(Context);

  let foundWishProduct = wishList.find((value) => {
    if (value === _id) return true;
    return false;
  });

  const navigate = useNavigate();
  function navigatePage() {
    navigate(`/products/${_id}`);
  }

  return (
    <div className={styles.LatestProduct}>
      <div className={styles.iconsSection}>
        <button onClick={navigatePage} id={showProductId}>
          <BsEye />
        </button>

        <button onClick={() => addItem(item)} id={cartFillId}>
          <BsCart />
        </button>
        <button
          id={wishlistId}
          className={foundWishProduct ? styles.activeBtn : null}
          onClick={() => addWishItem(_id)}
        >
          <BsHeart />
        </button>
      </div>
      <div className={styles.contentWrapper}>
        <img src={imageUrl} alt={name} />
        <h3 className={styles.nameProduct} onClick={navigatePage}>
          {name}
        </h3>
        <p className={styles.intensity}>
          Intensity <span>{intensity}</span>
        </p>
        <div>
          <RatingsStars rate={rate} size="large" />
        </div>
      </div>
      <p className={styles.price}>
        <span>${price} </span>
        <span className={styles.oldPrice}>
          {Boolean(oldPrice) ? `$${oldPrice}` : null}
        </span>
      </p>
    </div>
  );
}

LatestProduct.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  newPrice: PropTypes.number,
  oldPrice: PropTypes.number,
  addItem: PropTypes.func,
  quantity: PropTypes.number,
  rate: PropTypes.number,
};
export default LatestProduct;
