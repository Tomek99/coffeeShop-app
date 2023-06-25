import React, { useContext } from "react";
import { Context } from "../../../Contexts/Context";
import { ImBin } from "react-icons/im";
import styles from "./CartList.module.scss";
import PropTypes from "prop-types";
import BtnDeleteProduct from "../../Buttons/BtnDeleteProduct/BtnDeleteProduct";

function BasketList({ item, imBinId }) {
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
            {Boolean(oldPrice) ? `$${oldPrice}` : null}
          </span>
        </p>
      </div>
      <span>{quantity}</span>
      <BtnDeleteProduct
        handleBtn={deleteItem}
        id={_id}
        price={price}
        oldPrice={oldPrice}
        imBinId={imBinId}
      />
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
