import React from "react";
import styles from "./Product.module.scss";

function Product({ item }) {
  const { imageUrl, name, quantity, price, oldPrice } = item;
  return (
    <div className={styles.Product}>
      <img src={imageUrl} alt={name} className={styles.imgSize} />
      <div className={styles.divContent}>
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.divDescription}>
          <div className={styles.quantity}>
            <span>{quantity} pc.</span>
          </div>
          <div className={styles.price}>
            <span className={styles.oldPrice}>
              {oldPrice ? `$${oldPrice}` : null}
            </span>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
