import React from "react";
import styles from "./ProductsSection.module.scss";
import LatestProduct from "../LatestProduct/LatestProduct";
import HeaderSection from "../HeaderSection/HeaderSection";
import Product from "../../data/product.json";

function ProductsSection(props) {
  return (
    <div className={styles.ProductsSection} id="productsSection">
      <HeaderSection firstWord="Latest" secondWord="Products" />
      <div className={styles.itemSection}>
        {Product.map((item) => (
          <LatestProduct
            idProduct={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
            addItem={props.addItem}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
