import React from "react";
import styles from "./WishProducts.module.scss";
import BtnViewWishList from "../../../Buttons/BtnViewWishList/BtnViewWishList";
import BtnDeleteWishList from "../../../Buttons/BtnDeleteWishList/BtnDeleteWishList";

function WishProducts({ item }) {
  const { imageUrl, name, price, oldPrice } = item;
  return (
    <div className={styles.WishProducts}>
      <div>
        <img src={imageUrl} alt={name} className={styles.responsiveImg} />
      </div>
      <div className={styles.divContent}>
        <span>{name}</span>
        <div className={styles.textContent}>
          <div className={styles.divPrice}>
            <span> {`$${price}`}</span>
            {oldPrice ? (
              <span className={styles.oldPrice}>${oldPrice}</span>
            ) : null}
          </div>
          <span className={styles.available}>Available</span>
        </div>
      </div>
      <section className={styles.btnSection}>
        <BtnViewWishList />
        <BtnDeleteWishList />
      </section>
    </div>
  );
}

export default WishProducts;
