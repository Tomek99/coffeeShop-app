import React from "react";
import styles from "./PopupBasket.module.scss";
import BasketList from "./BasketList/BasketList";
import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";

function PopupBasket(props) {
  const {
    isBasketOpen,
    basketPrice,
    basketItems,
    deleteItem,
    handleBasket,
    basketQuantity,
  } = props;
  return (
    <div
      className={
        isBasketOpen
          ? styles.PopupBasket
          : `${styles.PopupBasket} ${styles.active}`
      }
    >
      <div className={styles.btnBar}>
        <span>
          Basket&nbsp;
          <span style={{ position: "absolute" }}>
            {basketQuantity !== 0 && basketQuantity}
          </span>
        </span>
        <button onClick={handleBasket} className={styles.btnHamburger}>
          <IoCloseSharp className={styles.btnIcon} />
        </button>
      </div>
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

      <div className={styles.summary}>
        <button className={styles.btnCheckoutNow}>Checkout now</button>
        <p className={styles.bill} style={{ color: "rgb(51, 220, 32)" }}>
          Save: <span className={styles.price}>${basketPrice.save}</span>
        </p>

        <p className={styles.bill}>
          Total cost:
          <span className={styles.price}>${basketPrice.currentPrice}</span>
        </p>
      </div>
    </div>
  );
}

PopupBasket.propTypes = {
  isBasketOpen: PropTypes.bool,
  basketItems: PropTypes.array,
  deleteItem: PropTypes.func,
  handleBasket: PropTypes.func,
  basketPrice: PropTypes.object,
  basketQuantity: PropTypes.number,
};

export default PopupBasket;
