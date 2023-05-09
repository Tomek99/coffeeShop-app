import React from "react";
import styles from "./WishProducts.module.scss";
import BtnsViewDelete from "../../../Buttons/BtnsViewDelete/BtnsViewDelete";
import { useNavigate } from "react-router-dom";

function WishProducts({ item, addWishItem }) {
  const { imageUrl, name, price, oldPrice, _id } = item;
  const navigate = useNavigate();

  function navigatePage(id) {
    navigate(`/products/${id}`);
  }
  return (
    <div className={styles.WishProducts}>
      <div onClick={() => navigatePage(_id)}>
        <img src={imageUrl} alt={name} className={styles.responsiveImg} />
      </div>
      <div className={styles.divContent}>
        <span className={styles.name} onClick={() => navigatePage(_id)}>
          {name}
        </span>
        <div className={styles.textContent}>
          <div className={styles.divPrice}>
            <span> {`$${price}`}</span>
            {oldPrice ? (
              <span className={styles.oldPrice}>${oldPrice}</span>
            ) : null}
          </div>
          <span className={styles.available}>Available</span>
        </div>
      </div>
      <section className={styles.btnSection}>
        <BtnsViewDelete tab="show" id={_id} btnHandle={navigatePage} />
        <BtnsViewDelete tab="delete" id={_id} btnHandle={addWishItem} />
      </section>
    </div>
  );
}

export default WishProducts;
