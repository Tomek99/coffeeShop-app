import React, { useContext } from "react";
import styles from "./Cart.module.scss";
import CartList from "./CartList/CartList";
import PropTypes from "prop-types";
import NBarAside from "../NBarAside/NBarAside";
import { Link } from "react-router-dom";
import { Context } from "../../Contexts/Context";

function Cart({ isCartOpen, handleCart }) {
  const { basketItems, basketPrice, basketQuantity } = useContext(Context);

  return (
    <div
      className={
        isCartOpen
          ? `${styles.PopupBasket} ${styles.active}`
          : styles.PopupBasket
      }
    >
      <NBarAside
        basketQuantity={basketQuantity}
        handleBtn={handleCart}
        isAccount={false}
      />
      {basketPrice.currentPrice !== 0 ? (
        <div className={styles.products}>
          {basketItems.map((item, index) => (
            <CartList key={index} item={item} />
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
        <Link className={styles.btnCheckoutNow} to="/cart" onClick={handleCart}>
          View my cart
        </Link>

        <p className={styles.bill} style={{ color: "rgb(51, 220, 32)" }}>
          Save:{" "}
          <span className={styles.price}>${basketPrice.save.toFixed(2)}</span>
        </p>

        <p className={styles.bill}>
          Total cost:
          <span className={styles.price}>
            ${basketPrice.currentPrice.toFixed(2)}
          </span>
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
