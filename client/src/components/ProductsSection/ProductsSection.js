import React, { useContext } from "react";
import styles from "./ProductsSection.module.scss";
import LatestProduct from "../LatestProduct/LatestProduct";
import HeaderSection from "../HeaderSection/HeaderSection";
import { Context } from "../../Contexts/Context";

function ProductsSection() {
  const { products } = useContext(Context);

  return (
    <div className={styles.ProductsSection} id="productsSection">
      <HeaderSection firstWord="latest" secondWord="products" />
      <div className={styles.itemSection}>
        {products.slice(0, 3).map((item, index) => (
          <LatestProduct key={index} item={item} isHome={true} />
        ))}
      </div>
    </div>
  );
}
export default ProductsSection;
