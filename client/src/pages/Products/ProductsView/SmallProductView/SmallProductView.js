import React from "react";
import styles from "./SmallProductView.module.scss";
import { useNavigate } from "react-router-dom";
import RatingsStars from "../../../../components/RatingStars/RatingStars";
import BtnsProduct from "../../../../components/Buttons/BtnsProduct/BtnsProduct";

function SmallProductsView({
  item,
  addItem,
  addWishItem,
  saveViewedProduct,
  wishList,
}) {
  const {
    _id,
    imageUrl,
    name,
    price,
    oldPrice,
    productRatings,
    intensity,
    origin,
    type,
    brand,
    weight,
  } = item;

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
    <div className={styles.SmallProductsView} onClick={navigatePage}>
      <div className={styles.divLeft}>
        <img src={imageUrl} alt={name} className={styles.productImg} />
      </div>
      <div className={styles.divDescription}>
        <span className={styles.spanProductName}>{name}</span>
        <span className={styles.spanDescription}>
          {brand} | {origin} | {intensity} | {weight} | {type}
        </span>
      </div>
      <div className={styles.showBtns}>
        <BtnsProduct
          item={item}
          wishList={wishList}
          navigatePage={navigatePage}
          addItem={addItem}
          addWishItem={addWishItem}
        />
      </div>
      <RatingsStars rate={productRatingsAverage} size="large" />
      <div className={styles.divRight}>
        <div className={styles.divPrice}>
          {oldPrice !== null ? (
            <span className={styles.spanOldPrice}>${oldPrice}</span>
          ) : null}
          <span>{oldPrice !== null ? `$${price}` : `$${price}`}</span>
        </div>
      </div>
    </div>
  );
}

export default SmallProductsView;
