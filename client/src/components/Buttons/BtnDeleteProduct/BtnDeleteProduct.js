import React from "react";
import { ImBin } from "react-icons/im";
import styles from "./BtnDeleteProduct.module.css";

function BtnDeleteProduct({ handleBtn, id, price, oldPrice, imBinId }) {
  return (
    <button
      className={styles.BtnDeleteProduct}
      onClick={() => handleBtn(id, price, oldPrice)}
      id={imBinId}
    >
      <ImBin size={18} />
    </button>
  );
}

export default BtnDeleteProduct;
