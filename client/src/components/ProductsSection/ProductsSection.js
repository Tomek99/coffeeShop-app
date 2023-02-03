import React, { useContext } from "react";
import styles from "./ProductsSection.module.scss";
import LatestProduct from "../LatestProduct/LatestProduct";
import HeaderSection from "../HeaderSection/HeaderSection";
import PropTypes from "prop-types";
import { Context } from "../../Contexts/Context";

function ProductsSection({ isTrue, isHome, firstWord }) {
  const { products } = useContext(Context);

  return (
    <div className={styles.ProductsSection} id="productsSection">
      <HeaderSection firstWord={firstWord} secondWord="Products" />
      <div className={styles.itemSection}>
        {isTrue
          ? products
              .slice(0, 3)
              .map((item, index) => (
                <LatestProduct key={index} item={item} isHome={isHome} />
              ))
          : products.map((item, index) => (
              <LatestProduct key={index} item={item} isHome={isHome} />
            ))}
      </div>
    </div>
  );
}

ProductsSection.propTypes = {
  firstWord: PropTypes.string,
  isTrue: PropTypes.bool,
  isHome: PropTypes.bool,
};
export default ProductsSection;
