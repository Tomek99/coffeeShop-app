import React from "react";
import styles from "./Item.module.scss";
import { ImBin } from "react-icons/im";
import { BsHeart } from "react-icons/bs";
function Item({ item }) {
  const values = ["1", "2", "3", "4", "5", "6", "7", "8", "+9"];

  return (
    <div className={styles.Item}>
      <div className={styles.leftSide}>
        <img src={item.imageUrl} alt="" />
        <p>{item.name}</p>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.price}>
          <p>${item.oldPrice}</p>
          <p>${item.newPrice}</p>
        </div>
        <div className={styles.itemAmount}>
          <select value={item.quantity}>
            {values.map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.buttons}>
          <button>
            <ImBin size={18} />
          </button>
          <button>
            <BsHeart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
