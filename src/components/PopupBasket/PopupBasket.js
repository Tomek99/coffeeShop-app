import React from "react";
import styles from "./PopupBasket.module.scss";
import BasketList from "./BasketList/BasketList";

function PopupBasket(props) {
  const { isBasketOpen, basketPrice, basketItems, deleteItem } = props;

  return (
    <div
      className={
        isBasketOpen
          ? `${styles.PopupBasket} ${styles.active}`
          : styles.PopupBasket
      }
    >
      {basketPrice.currentPrice !== 0 ? (
        <div className={styles.products}>
          {basketItems.map((item) => (
            <BasketList
              id={item.id}
              key={item.id}
              name={item.name}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              imageUrl={item.imageUrl}
              deleteItem={deleteItem}
              quantity={item.quantity}
            />
          ))}
        </div>
      ) : (
        <div
          className={styles.products}
          style={{ fontSize: "2rem", textTransform: "none" }}
        >
          Your basket is empty
        </div>
      )}
      <button type="button" className={styles.btnBuyProducts}>
        Checkout now
      </button>
      <div className={styles.summaryPrice}>
        <div className={styles.singleProductSave}>
          <span>Save: </span>
          <span className={styles.price}>{basketPrice.save}$</span>
        </div>
        <div className={styles.singleProductTotalCost}>
          <span>Total cost: </span>
          <span className={styles.price}>{basketPrice.currentPrice}$</span>
        </div>
      </div>
    </div>
  );
}

export default PopupBasket;
