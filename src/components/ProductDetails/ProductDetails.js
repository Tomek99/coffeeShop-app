import React from "react";
import styles from "./ProductDetalis.module.scss";
import { useParams } from "react-router-dom";
import ProductData from "../../data/product.json";

function ProductDetails() {
  const productId = useParams();
  const thisProduct = ProductData.find((prod) => prod.id === productId.id);

  return (
    <div className={styles.ProductDetails}>
      <div>
        <div>
          <img src={thisProduct.imageUrl} alt="Img" />;
        </div>
        <div>
          <h1>{thisProduct.name}</h1>
          <p>{thisProduct.newPrice}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProductDetails;
