import React from "react";
import styles from "./NBarAside.module.scss";
import { IoCloseSharp } from "react-icons/io5";
function NBarAside(props) {
  return (
    <div className={styles.basketBar}>
      {props.isAccount ? (
        <span>Account</span>
      ) : (
        <span>
          Your Cart&nbsp;
          <span style={{ position: "absolute", color: "rgb(51, 220, 32)" }}>
            {props.basketQuantity !== 0
              ? `(${props.basketQuantity} items)`
              : null}
          </span>
        </span>
      )}
      <button onClick={props.handleBtn} className={styles.btnHamburger}>
        <IoCloseSharp className={styles.btnIcon} />
      </button>
    </div>
  );
}

export default NBarAside;
