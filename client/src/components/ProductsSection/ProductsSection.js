import React, { useContext } from "react";
import styles from "./ProductsSection.module.scss";
import LatestProduct from "../LatestProduct/LatestProduct";
import HeaderSection from "../HeaderSection/HeaderSection";
import { Context } from "../../Contexts/Context";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

function ProductsSection() {
  const { products, loading } = useContext(Context);

  return (
    <div className={styles.ProductsSection} id="productsSection">
      <HeaderSection firstWord="latest" secondWord="products" />
      {loading ? (
        <LoaderSpinner loading={loading} />
      ) : (
        <div className={styles.itemsSection}>
          <div className={styles.flexTemplate}>
            {products.slice(0, 4).map((item, index) => (
              <LatestProduct key={index} item={item} isHome={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductsSection;
