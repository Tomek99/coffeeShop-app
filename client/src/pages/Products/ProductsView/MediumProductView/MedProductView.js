import React from "react";
import styles from "./MedProductView.module.scss";
import RatingsStars from "../../../../components/RatingStars/RatingStars";
import { useNavigate } from "react-router-dom";
import BtnsProduct from "../../../../components/Buttons/BtnsProduct/BtnsProduct";

// item={item}
// cartFillId={`cartFillId${index}`}
// showProductId={`showProductId${index}`}
// wishlistId={`wishlistId${index}`}

function MedProductView({
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
    <div className={styles.MedProductView} onClick={navigatePage}>
      <div className={styles.divLeft}>
        <img src={imageUrl} alt={name} className={styles.productImg} />
      </div>
      <div className={styles.divCenter}>
        <span className={styles.spanProductName}>{name}</span>
        <div>
          <RatingsStars rate={productRatingsAverage} size="large" />
          <span>({productRatings.length})</span>
        </div>

        <span>Brand: {brand}</span>
        <span>Intensity: {intensity}</span>
        <span>Origin: {origin}</span>
        <span>Weight: {weight}</span>
        <span>type {type}</span>
      </div>
      <div className={styles.divRight}>
        <div className={styles.divPrice}>
          {oldPrice !== null ? (
            <span className={styles.spanOldPrice}>${oldPrice}</span>
          ) : null}
          <span>{oldPrice !== null ? `$${price}` : `$${price}`}</span>
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
      </div>
    </div>
  );
}

export default MedProductView;
