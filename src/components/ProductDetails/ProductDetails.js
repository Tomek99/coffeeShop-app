import React from "react";
import styles from "./ProductDetalis.module.scss";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import ExtraDetails from "./ExtraDetails/ExtraDetails";

function ProductDetails(props) {
  const productId = useParams();
  const thisProduct = props.productData.find(
    (prod) => prod.id === productId.id
  );

  return (
    <div className={styles.ProductDetails}>
      <div className={styles.productDetailsSection}>
        <div className={styles.productDetailsImage}>
          <img src={"/" + thisProduct.imageUrl} alt="Img" />
        </div>
        <div className={styles.productDetailsContent}>
          <h1>{thisProduct.name}</h1>
          <p>
            {thisProduct.newPrice} {thisProduct.oldPrice}
          </p>
          <p>country of origin:{thisProduct.origin} </p>
          <div className={styles.productDetailsContentButtons}>
            <div className={styles.productQuantity}>
              <button className={styles.btnProductQuantity}>
                <FiMinus />
              </button>
              <input type="text" value="1" readOnly />
              <button className={styles.btnProductQuantity}>
                <FiPlus />
              </button>
              <button className={styles.btnProductQuantity}>
                Add to basket
              </button>
            </div>
            <button className={styles.wishList}>Add to wish list</button>
          </div>
        </div>
      </div>
      <ExtraDetails />
    </div>
  );
}

export default ProductDetails;
