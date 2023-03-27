import React, { useContext } from "react";
import { Context } from "../../../Contexts/Context";
import { ImBin } from "react-icons/im";
import styles from "./CartList.module.scss";
import PropTypes from "prop-types";

function BasketList({ item }) {
  const { _id, name, imageUrl, price, oldPrice, quantity } = item;

  const { deleteItem } = useContext(Context);
  return (
    <div className={styles.SingleProduct} key={_id}>
      <img src={imageUrl} alt={name} />
      <div className={styles.productDetails}>
        <h2>{name}</h2>
        <p>
          <span className={styles.newPrice}>${price} </span>
          <span className={styles.oldPrice}>
            {" "}
            {Boolean(oldPrice) ? oldPrice : null}
          </span>
        </p>
      </div>
      <span>{quantity}</span>
      <button
        className={styles.btnDeleteProduct}
        onClick={() => deleteItem(_id, price, oldPrice)}
      >
        <ImBin size={18} />
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
