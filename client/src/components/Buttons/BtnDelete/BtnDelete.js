import React from "react";
import styles from "./BtnDelete.module.scss";
import PropTypes from "prop-types";

function BtnDelete({ handleShowDelete }) {
  return (
    <button className={styles.btnDelete} onClick={handleShowDelete}>
      Delete
    </button>
  );
}
BtnDelete.propTypes = {
  handleShowDelete: PropTypes.func,
};
export default BtnDelete;
