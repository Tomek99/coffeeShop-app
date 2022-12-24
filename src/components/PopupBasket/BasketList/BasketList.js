import React from "react";
import { ImBin } from "react-icons/im";
import styles from "./BasketList.module.scss";
import PropTypes from "prop-types";

function BasketList(props) {
  const { id, name, imageUrl, newPrice, oldPrice, quantity, deleteItem } =
    props;
  return (
    <div className={styles.singleProduct} key={id}>
      <img src={"/" + imageUrl} alt={name} />
      <div className={styles.productDetails}>
        <h2>{name}</h2>
        <p>
          <span className={styles.singleProductNewPrice}>${newPrice} </span>
          <span className={styles.singleProductOldPrice}> ${oldPrice}</span>
        </p>
      </div>
      <span>{quantity}</span>
      <button
        className={styles.btnDeleteProduct}
        onClick={() => deleteItem(id, newPrice, oldPrice)}
      >
        <ImBin size={15} color="var(--main-color)" />
      </button>
    </div>
  );
}

BasketList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  newPrice: PropTypes.number,
  oldPrice: PropTypes.number,
  quantity: PropTypes.number,
  deleteItem: PropTypes.func,
};
export default BasketList;
