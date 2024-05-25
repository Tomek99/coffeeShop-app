import React from "react";
import styles from "./OrderDetailsProductOrdered.module.scss";

function OrderDetailsProductOrdered({ item }) {
  console.log(item);
  const { imageUrl, name, price, quantity, _id } = item;
  return (
    <div className={styles.OrderDetailsProductOrdered}>
      <div>
        <img src={imageUrl} alt={name} className={styles.imgDiv} />
      </div>
      <div className={styles.productNameDiv}>
        <p className={styles.boldSpan}>{name}</p>
        <span>PRODUCT CODE: {_id}</span>
      </div>
      <div className={styles.costDiv}>
        <span className={styles.boldSpan}>${price}</span>
        <span>{quantity}pc.</span>
        <span className={styles.boldSpan}>${price * quantity}</span>
      </div>
    </div>
  );
}

export default OrderDetailsProductOrdered;
