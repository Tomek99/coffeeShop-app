import React from "react";
import styles from "./FilterItem.module.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function FilterItem({ item, clearSearch }) {
  const { name, imageUrl, price, oldPrice, _id } = item;

  const navigate = useNavigate();

  function navigateToProduct() {
    clearSearch();
    navigate(`/products/${_id}`);
  }

  return (
    <div className={styles.FilterItem} onClick={navigateToProduct}>
      <img src={imageUrl} alt={name} className={styles.imgWidth} />

      <div className={styles.contentWrapper}>
        <p>{name}</p>
        <p>
          <span>${price} </span>
          <span className={styles.strikethroughText}>
            {oldPrice ? `$${oldPrice}` : null}
          </span>
        </p>
      </div>
    </div>
  );
}

FilterItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.string,
  oldPrice: PropTypes.string,
  _id: PropTypes.string,
  handleSearch: PropTypes.func,
};

export default FilterItem;
