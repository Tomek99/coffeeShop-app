import React from "react";
import styles from "./BtnEdit.module.scss";
import PropTypes from "prop-types";
function BtnEdit({ handleShowEdit }) {
  return (
    <button className={styles.btnEdit} onClick={handleShowEdit}>
      Edit
    </button>
  );
}
BtnEdit.propTypes = {
  handleShowEdit: PropTypes.func,
};
export default BtnEdit;
