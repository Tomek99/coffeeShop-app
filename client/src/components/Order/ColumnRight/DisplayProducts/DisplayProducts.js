import React, { useContext } from "react";
import styles from "./DisplayProducts.module.scss";
import { Context } from "../../../../Contexts/Context";
import Product from "./Product/Product";

function DisplayProducts() {
  const { cartItems } = useContext(Context);

  return (
    <div className={styles.DisplayProducts}>
      {cartItems.map((item, index) => (
        <Product item={item} key={index} />
      ))}
    </div>
  );
}

export default DisplayProducts;
