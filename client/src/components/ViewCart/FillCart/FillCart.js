import React, { useContext } from "react";
import CartSummary from "./CartSummary/CartSummary";
import styles from "./FillCart.module.scss";
import Item from "./Item/Item";
import { ImBin } from "react-icons/im";
import { BsHeart } from "react-icons/bs";
import { Context } from "../../../Contexts/Context";
function FillCart() {
  const { basketItems, basketQuantity, deleteItem, clearTheCart } =
    useContext(Context);
  return (
    <div className={styles.fillCart}>
      <div className={styles.leftColumn}>
        <div className={styles.divRow}>
          <header className={styles.cartHeader}>
            Cart {`(${basketQuantity})`}
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
          {basketItems.map((item, index) => (
            <Item
              key={index}
              item={item}
              deleteItem={deleteItem}
              clearTheCart={clearTheCart}
            />
          ))}
        </div>
      </div>

      <CartSummary />
    </div>
  );
}

export default FillCart;
