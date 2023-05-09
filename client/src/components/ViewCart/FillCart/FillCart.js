import React, { useContext } from "react";
import CartSummary from "./CartSummary/CartSummary";
import styles from "./FillCart.module.scss";
import ProductItem from "./ProductItem/ProductItem";
import { ImBin } from "react-icons/im";
import { BsHeart } from "react-icons/bs";
import { Context } from "../../../Contexts/Context";

function FillCart() {
  const { cartItems, cartQuantity, deleteItem, clearTheCart, changeQuantity } =
    useContext(Context);

  return (
    <div className={styles.fillCart}>
      <div className={styles.leftColumn}>
        <div className={styles.divRow}>
          <header className={styles.cartHeader}>
            Cart {`(${cartQuantity})`}
          </header>
          <div className={styles.buttons}>
            <button>
              <BsHeart size={18} /> <p>Save as list</p>
            </button>
            <button onClick={clearTheCart}>
              <ImBin size={18} /> <p>Clear the cart</p>
            </button>
          </div>
        </div>
        <div className={styles.items}>
          {cartItems.map((item, index) => (
            <ProductItem
              key={index}
              item={item}
              deleteItem={deleteItem}
              clearTheCart={clearTheCart}
              changeQuantity={changeQuantity}
            />
          ))}
        </div>
      </div>
      <div className={styles.divSticky}>
        <CartSummary path="/order" text="Checkout" />
      </div>
    </div>
  );
}

export default FillCart;
