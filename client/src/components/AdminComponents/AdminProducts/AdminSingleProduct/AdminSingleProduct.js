import React from "react";
import styles from "./AdminSingleProduct.module.scss";
import AdminActionBtns from "./AdminActionBtns/AdminActionBtns";

function SingleProduct({ product }) {
  return (
    <section className={styles.SingleProduct}>
      <img
        src={product.imageUrl}
        className={styles.singleProductImg}
        alt={product.name}
      />
      <div className={styles.productContent}>
        <span>ID:{product._id}</span>
        <span>{product.name}</span>
        <span>
          ${product.price} - ${product.oldPrice}
        </span>
      </div>
      <AdminActionBtns />
    </section>
  );
}

export default SingleProduct;
