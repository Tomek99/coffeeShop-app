import React from "react";
import styles from "./SearchedProduct.module.scss";

function SearchedProduct({ item }) {
  return (
    <div className={styles.SearchedProduct}>
      <img
        alt={item.name}
        src={item.productImg}
        className={styles.productImg}
      />
      <span className={styles.spanName}>{item.productName}</span>
    </div>
  );
}

export default SearchedProduct;
