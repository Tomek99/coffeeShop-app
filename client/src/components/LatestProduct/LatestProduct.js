import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Contexts/Context";
import { BsEye, BsCart, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styles from "./LatestProduct.module.scss";
import PropTypes from "prop-types";
import RatingsStars from "../RatingStars/RatingStars";
import BtnsProduct from "../Buttons/BtnsProduct/BtnsProduct";

function LatestProduct({ item }) {
  const { _id, imageUrl, name, price, oldPrice, productRatings, intensity } =
    item;
  const { addItem, addWishItem, saveViewedProduct, wishList } =
    useContext(Context);

  const viwedProduct = {
    productId: _id,
    productUrl: imageUrl,
    productName: name,
  };

  const navigate = useNavigate();
  function navigatePage() {
    navigate(`/products/${_id}`);
    saveViewedProduct(viwedProduct);
  }

  const productRatingsAverage =
    productRatings && productRatings.length > 0
      ? productRatings.reduce((sum, current) => sum + current, 0) /
        productRatings.length
      : 0;
  return (
    <div className={styles.LatestProduct}>
      <BtnsProduct
        item={item}
        wishList={wishList}
        navigatePage={navigatePage}
        addItem={addItem}
        addWishItem={addWishItem}
      />
      <div className={styles.contentWrapper}>
        <img src={imageUrl} alt={name} />
        <h3 className={styles.productName} onClick={navigatePage}>
          {name}
        </h3>
        <p className={styles.intensity}>
          Intensity <span>{intensity}</span>
        </p>
        <div>
          <RatingsStars rate={productRatingsAverage} size="large" />
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
