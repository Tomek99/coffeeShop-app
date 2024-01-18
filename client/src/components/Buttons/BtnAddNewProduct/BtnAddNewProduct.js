import React from "react";
import styles from "./BtnAddNewProduct.module.css";

function BtnAddNewProduct({ handleNewProductIsDisplayed }) {
  return (
    <button
      className={styles.BtnAddNewProduct}
      onClick={handleNewProductIsDisplayed}
    >
      + Add new product
    </button>
  );
}

export default BtnAddNewProduct;
