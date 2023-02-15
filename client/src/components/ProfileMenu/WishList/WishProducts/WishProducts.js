import React from "react";
import styles from "./WishProducts.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import AmountProducts from "./AmountProducts/AmountProducts";

function WishProducts() {
  return (
    <div className={styles.WishProducts}>
      <div className={styles.header}>
        <h2>My new phone</h2>
        <button>
          <BsThreeDotsVertical size={20} color="#fff" />
        </button>
      </div>
      <div className={styles.update}>
        <p>Just now {`(last change)`}</p>
      </div>
      <AmountProducts />
    </div>
  );
}

export default WishProducts;
