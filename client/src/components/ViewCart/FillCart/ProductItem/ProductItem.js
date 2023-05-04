import React from "react";
import styles from "./ProductItem.module.scss";
import { ImBin } from "react-icons/im";
import { BsHeart, BsThreeDotsVertical } from "react-icons/bs";

function ProductItem({ item, deleteItem, changeProductQuantity }) {
  const { _id, name, imageUrl, oldPrice, price, quantity } = item;
  return (
    <div className={styles.Item}>
      <div className={styles.leftSide}>
        <img src={imageUrl} alt="" />
        <div>
          <p>{name}</p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.price}>
          <p>{oldPrice !== 0 ? `$${oldPrice}` : null}</p>
          <p>${price}</p>
        </div>
        <div className={styles.selectMate}>
          <select
            className={styles.dropdownEl}
            value={quantity}
            onChange={() => console.log("hi")}
          >
            {Array.from({ length: 9 }, (v, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => deleteItem(_id, price, oldPrice)}>
            <ImBin size={18} />
          </button>
          <button>
            <BsHeart size={18} />
          </button>
        </div>
        <div className={styles.btnDots}>
          <button>
            <BsThreeDotsVertical size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
