import React, { useContext } from "react";
import styles from "./ViewCart.module.scss";
import { Context } from "../../Contexts/Context";
import EmptyCart from "./EmptyCart/EmptyCart";
import FillCart from "./FillCart/FillCart";

function ViewCart() {
  const { basketItems, basketQuantity } = useContext(Context);

  return (
    <div className={styles.ViewCart}>
      {basketItems.length !== 0 ? (
        <FillCart basketItems={basketItems} basketQuantity={basketQuantity} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default ViewCart;
