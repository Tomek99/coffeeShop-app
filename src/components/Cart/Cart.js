import React from "react";
import styles from "./Cart.module.scss";
import CartList from "./CartList/CartList";
import PropTypes from "prop-types";
import NBarAside from "../NBarAside/NBarAside";

function Cart(props) {
  const {
    isBasketOpen,
    basketPrice,
    basketItems,
    handleBasket,
    basketQuantity,
  } = props;
  return (
    <div
      className={
        isBasketOpen
          ? `${styles.PopupBasket} ${styles.active}`
          : styles.PopupBasket
      }
    >
      <NBarAside
        basketQuantity={basketQuantity}
        handleBtn={handleBasket}
        isAccount={false}
      />
      {basketPrice.currentPrice !== 0 ? (
        <div className={styles.products}>
          {basketItems.map((item) => (
            <CartList
              id={item.id}
              key={item.id}
              name={item.name}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
            />
          ))}
        </div>
      ) : (
        <div
          className={styles.products}
          style={{ fontSize: "2rem", textTransform: "none" }}
        >
          Your cart is empty...
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

Cart.propTypes = {
  isAsideOpen: PropTypes.bool,
  basketItems: PropTypes.array,
  handleAside: PropTypes.func,
  basketPrice: PropTypes.object,
  basketQuantity: PropTypes.number,
};

export default Cart;
