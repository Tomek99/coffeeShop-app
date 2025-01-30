import React from "react";
import styles from "./SearchedProduct.module.scss";
import { useNavigate } from "react-router-dom";

function SearchedProduct({ item }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.SearchedProduct}
      onClick={() => {
        navigate(`products/${item.productId}`);
      }}
    >
      <img
        alt={item.productName}
        src={item.productUrl}
        className={styles.productImg}
      />
      <span className={styles.spanName}>{item.productName}</span>
    </div>
  );
}

export default SearchedProduct;
