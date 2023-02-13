import React from "react";
import styles from "./NBarAside.module.scss";
import CloseBtn from "../Buttons/CloseBtn/CloseBtn";
import PropTypes from "prop-types";

function NBarAside(props) {
  return (
    <div className={styles.basketBar}>
      {props.isAccount ? (
        <span>Account</span>
      ) : (
        <span>
          Cart&nbsp;
          <span style={{ color: "rgb(51, 220, 32)" }}>
            {props.basketQuantity !== 0
              ? `(${props.basketQuantity} items)`
              : null}
          </span>
        </span>
      )}
      <CloseBtn handleBtn={props.handleBtn} />
    </div>
  );
}
NBarAside.propTypes = {
  handleBtn: PropTypes.func,
};
export default NBarAside;
