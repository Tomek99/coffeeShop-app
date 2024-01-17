import React from "react";
import styles from "./AdminProductDetails.module.scss";

function AdminProductDetails({ productDetails }) {
  console.log(productDetails.oldPrice);
  return (
    <div className={styles.AdminProductDetails}>
      <span>
        ID:
        {productDetails._id}
      </span>
      <span>
        Product name:
        {productDetails.name}
      </span>
      <span>
        Image url:
        {productDetails.imageUrl}
      </span>
      <span>
        Price:
        {productDetails.price}
      </span>
      <span>
        Old Price:
        {productDetails.oldPrice === null ? "null" : productDetails.oldPrice}
      </span>
      <span>
        Origin:
        {productDetails.origin}
      </span>
      <span>
        Brand:
        {productDetails.brand}
      </span>
      <span>
        Intensity:
        {productDetails.intensity}
      </span>
      <span>
        Type:
        {productDetails.type}
      </span>
      <span>
        Weight:
        {productDetails.weight}
      </span>
      <span>
        Available:
        {productDetails.available}
      </span>

      <span> Product Ratings:</span>
      <span> Product Ratings Average:</span>
      <span>
        CreatedAt:
        {productDetails.createdAt}
      </span>
      <span>
        UpdatedAt:
        {productDetails.updatedAt}
      </span>
    </div>
  );
}

export default AdminProductDetails;
