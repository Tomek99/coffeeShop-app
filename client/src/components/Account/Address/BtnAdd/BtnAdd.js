import React from "react";
import styles from "./BtnAdd.module.scss";
import PropTypes from "prop-types";

function BtnAddAddress({ name }) {
  return <button className={styles.btnAdd}>+ Add new {name}</button>;
}
BtnAddAddress.propTypes = {
  name: PropTypes.string,
};
export default BtnAddAddress;
