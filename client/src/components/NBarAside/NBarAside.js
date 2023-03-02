import React from "react";
import styles from "./NBarAside.module.scss";
import BtnClose from "../Buttons/BtnClose/BtnClose";
import PropTypes from "prop-types";

function NBarAside(props) {
  return (
    <div className={styles.basketBar}>
      {props.isAccount ? (
        <span>Account</span>
      ) : (
        <span>
          Cart&nbsp;
          <span style={{ color: "#38b32a" }}>
            {props.basketQuantity !== 0
              ? `(${props.basketQuantity} items)`
              : null}
          </span>
        </span>
      )}
      <BtnClose handleBtn={props.handleBtn} />
    </div>
  );
}
NBarAside.propTypes = {
  handleBtn: PropTypes.func,
};
export default NBarAside;
