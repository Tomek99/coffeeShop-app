import React from "react";
import styles from "./ProductItem.module.scss";
import { ImBin } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import BtnDeleteProduct from "../../../Buttons/BtnDeleteProduct/BtnDeleteProduct";

function ProductItem({ item, deleteItem, changeQuantity, imBinId }) {
  const { _id, name, imageUrl, oldPrice, price, quantity } = item;

  const navigate = useNavigate();
  function navigatePage(id) {
    navigate(`/products/${id}`);
  }

  return (
    <div className={styles.Item}>
      <div className={styles.leftSide}>
        <img src={imageUrl} alt={imageUrl} onClick={() => navigatePage(_id)} />
        <div>
          <p onClick={() => navigatePage(_id)}>{name}</p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.price}>
          <p>{oldPrice ? `$${oldPrice}` : null}</p>
          <p>${price}</p>
        </div>
        <div className={styles.selectMate}>
          <select
            className={styles.dropdownEl}
            value={quantity}
            onChange={(e) => changeQuantity(e, _id)}
          >
            {Array.from({ length: 9 }, (v, i) => (
              <option key={i} value={i + 1}>
                {i + 1 === 9 ? "9+" : i + 1}
              </option>
            ))}
          </select>
        </div>

        <BtnDeleteProduct
          handleBtn={deleteItem}
          id={_id}
          price={price}
          oldPrice={oldPrice}
          imBinId={imBinId}
        />
      </div>
    </div>
  );
}

export default ProductItem;
