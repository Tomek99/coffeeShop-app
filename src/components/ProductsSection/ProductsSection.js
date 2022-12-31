import React from "react";
import styles from "./ProductsSection.module.scss";
import LatestProduct from "../LatestProduct/LatestProduct";
import HeaderSection from "../HeaderSection/HeaderSection";
import PropTypes from "prop-types";

function ProductsSection({ isTrue, productData, isHome }) {
  return (
    <div className={styles.ProductsSection} id="productsSection">
      <HeaderSection firstWord="Latest" secondWord="Products" />
      <div className={styles.itemSection}>
        {isTrue
          ? productData
              .slice(0, 3)
              .map((item) => (
                <LatestProduct
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  quantity={item.quantity}
                  isHome={isHome}
                  rate={item.rate}
                />
              ))
          : productData.map((item) => (
              <LatestProduct
                id={item.id}
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                quantity={item.quantity}
                isHome={isHome}
                rate={item.rate}
              />
            ))}
      </div>
    </div>
  );
}

ProductsSection.propTypes = {
  isTrue: PropTypes.bool,
  isHome: PropTypes.bool,
  productData: PropTypes.array,
};
export default ProductsSection;
