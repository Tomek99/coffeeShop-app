import React from "react";
import styles from "./EmptyCart.module.scss";
import { Link } from "react-router-dom";
import BtnDefault from "../../Buttons/BtnDefault/BtnDefault";

function EmptyCart() {
  return (
    <div className={styles.emptyCart}>
      <header className={styles.cartHeader}>Your cart is empty</header>

      <BtnDefault route="products" text="Return to products page" />
    </div>
  );
}

export default EmptyCart;
