import React from "react";
import styles from "./EmptyCart.module.scss";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className={styles.emptyCart}>
      <header className={styles.cartHeader}>Your cart is empty</header>
      <Link to="/products" className={styles.btnReturn}>
        Return to products page
      </Link>
    </div>
  );
}

export default EmptyCart;
