import React from "react";
import styles from "./CartItem.module.scss";
import PropTypes from "prop-types";

function CartItem({ item }) {
  const { name, imageUrl, quantity, price, oldPrice } = item;
  return (
    <div className={styles.CartItem}>
      <div className={styles.divFlexRow}>
        <img src={imageUrl} alt={name} className={styles.responsiveImg} />
        <p>{name}</p>
      </div>
      <div className={styles.divPrice}>
        {oldPrice ? <p className={styles.oldPrice}>${oldPrice}</p> : null}
        <p>
          <span style={{ color: "var(--text-color)", opacity: 0.7 }}>
            {quantity}pc.&nbsp;
          </span>
          <span>${price}</span>
        </p>
      </div>
    </div>
  );
}
CartItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  quantity: PropTypes.number,
  newPrice: PropTypes.string,
  oldPrice: PropTypes.string,
};
export default CartItem;
