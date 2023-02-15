import React from "react";
import styles from "./ProductsPurchased.module.scss";
import PropTypes from "prop-types";

function ProductsPurchased({ url }) {
  return (
    <div>
      <img src={url} alt="" className={styles.imgResponsive} />
    </div>
  );
}

ProductsPurchased.propTypes = {
  url: PropTypes.string,
};
export default ProductsPurchased;
