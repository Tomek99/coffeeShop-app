import React from "react";
import { Link } from "react-router-dom";
import styles from "./WishProducts.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
function WishProducts({ title }) {
  return (
    <div className={styles.WishProducts}>
      <div className={styles.header}>
        <h2>My new phone</h2>
        <button>
          <BsThreeDotsVertical size={20} color="#fff" />
        </button>
      </div>
      <div className={styles.update}>
        <p>Just snow {`(last change)`}</p>
      </div>
      <div className={styles.productList}>
        <span>
          <BsHeart size={20} />
        </span>
        <p>The list is empty - add products</p>
      </div>
    </div>
  );
}

export default WishProducts;
