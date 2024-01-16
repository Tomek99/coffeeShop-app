import React from "react";
import styles from "./SingleProduct.module.scss";
import { CiEdit } from "react-icons/ci";
import { ImBin } from "react-icons/im";
import { BsEye } from "react-icons/bs";

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
      <div className={styles.actionBtns}>
        <BsEye size={25} />
        <CiEdit size={25} />
        <ImBin size={25} />
      </div>
    </section>
  );
}

export default SingleProduct;
