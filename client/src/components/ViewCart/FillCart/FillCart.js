import React from "react";
import CartSummary from "./CartSummary/CartSummary";
import styles from "./FillCart.module.scss";
import Item from "./Item/Item";
import { ImBin } from "react-icons/im";
import { BsHeart } from "react-icons/bs";
function FillCart({ basketItems, basketQuantity }) {
  console.log(basketQuantity);
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
            <button>
              <ImBin size={18} /> <p>Clear the cart</p>
            </button>
          </div>
        </div>
        <div className={styles.items}>
          {basketItems.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </div>
      </div>

      <CartSummary />
    </div>
  );
}

export default FillCart;
