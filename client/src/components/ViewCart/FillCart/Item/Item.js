import React from "react";
import styles from "./Item.module.scss";
import { ImBin } from "react-icons/im";
import { BsHeart, BsThreeDotsVertical } from "react-icons/bs";

function Item({ item, deleteItem }) {
  const { name, imageUrl, oldPrice, newPrice, quantity } = item;
  const values = ["1", "2", "3", "4", "5", "6", "7", "8", "+9"];

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
          <p>${newPrice}</p>
        </div>
        <div className={styles.itemAmount}>
          <select value={quantity}>
            {values.map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.buttons}>
          <button
            onClick={() => deleteItem(item._id, item.newPrice, item.oldPrice)}
          >
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

export default Item;
