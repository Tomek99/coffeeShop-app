import React, { useContext } from "react";
import styles from "./ViewCart.module.scss";
import { Context } from "../../Contexts/Context";
import EmptyCart from "./EmptyCart/EmptyCart";
import FillCart from "./FillCart/FillCart";

function ViewCart() {
  const { cartItems } = useContext(Context);
  return (
    <div className={styles.ViewCart}>
      {cartItems.length > 0 ? <FillCart /> : <EmptyCart />}
    </div>
  );
}

export default ViewCart;
