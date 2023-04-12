import React, { useContext } from "react";
import styles from "./Cart.module.scss";
import CartList from "./CartList/CartList";
import PropTypes from "prop-types";
import NBarAside from "../NBarAside/NBarAside";
import { Context } from "../../Contexts/Context";
import BtnCart from "../Buttons/BtnCart/BtnCart";

function Cart({ isCartOpen, handleCart }) {
  const { cartItems, cartValue, cartSave, cartQuantity } = useContext(Context);
  return (
    <div
      className={
        isCartOpen
          ? `${styles.PopupBasket} ${styles.active}`
          : styles.PopupBasket
      }
    >
      <NBarAside
        cartQuantity={cartQuantity}
        handleBtn={handleCart}
        isCart={true}
      />
      {cartItems.length > 0 ? (
        <div className={styles.products}>
          {cartItems.map((item, index) => (
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
        <BtnCart handleCart={handleCart} />

        <p className={styles.bill} style={{ color: "#38b32a" }}>
          Save: <span className={styles.price}>${cartSave.toFixed(2)}</span>
        </p>

        <p className={styles.bill}>
          Total cost:
          <span className={styles.price}>${cartValue.toFixed(2)}</span>
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
