import React from "react";
import styles from "./ProductsPurchased.module.scss";
function ProductsPurchased({ url }) {
  return (
    <div>
      <img src={url} alt="" className={styles.imgResponsive} />
    </div>
  );
}

export default ProductsPurchased;
