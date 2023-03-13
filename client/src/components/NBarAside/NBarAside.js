import React from "react";
import styles from "./NBarAside.module.scss";
import BtnClose from "../Buttons/BtnClose/BtnClose";
import PropTypes from "prop-types";

function NBarAside({ isAccount, basketQuantity, handleBtn, title }) {
  return (
    <div className={styles.basketBar}>
      {isAccount ? (
        <span>Account</span>
      ) : (
        <span>
          Cart&nbsp;
          <span style={{ color: "#38b32a" }}>
            {basketQuantity !== 0 ? `(${basketQuantity} items)` : null}
          </span>
        </span>
      )}
      <BtnClose handleBtn={handleBtn} />
    </div>
  );
}
NBarAside.propTypes = {
  handleBtn: PropTypes.func,
};
export default NBarAside;
