import React from "react";
import styles from "./NBarAside.module.scss";
import BtnClose from "../Buttons/BtnClose/BtnClose";
import PropTypes from "prop-types";

function NBarAside({ isCart, cartQuantity, handleBtn, title }) {
  return (
    <div className={styles.cartBar}>
      {isCart ? (
        <span>
          Cart&nbsp;
          <span style={{ color: "#38b32a" }}>
            {cartQuantity !== 0 ? `(${cartQuantity} items)` : null}
          </span>
        </span>
      ) : (
        <span className={styles.spanTitle}>{title}</span>
      )}
      <BtnClose handleBtn={handleBtn} />
    </div>
  );
}
NBarAside.propTypes = {
  handleBtn: PropTypes.func,
  isCart: PropTypes.bool,
  cartQuantity: PropTypes.number,
  title: PropTypes.string,
};
export default NBarAside;
