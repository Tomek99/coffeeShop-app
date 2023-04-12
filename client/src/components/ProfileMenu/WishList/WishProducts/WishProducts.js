import React from "react";
import styles from "./WishProducts.module.scss";
import AmountProducts from "./AmountProducts/AmountProducts";
import BtnDots from "../../../Buttons/BtnDots/BtnDots";

function WishProducts() {
  return (
    <div className={styles.WishProducts}>
      <div className={styles.headerWishProduct}>
        <h2>My new phone</h2>
        <div styles={styles.test}>
          <BtnDots />
        </div>
      </div>
      <div className={styles.update}>
        <p>Just now {`(last change)`}</p>
      </div>
      <AmountProducts />
    </div>
  );
}

export default WishProducts;
