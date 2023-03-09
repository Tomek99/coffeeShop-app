import React from "react";
import BtnRemoveData from "../../../Buttons/BtnRemoveData/BtnRemoveData";
import BtnCancell from "../../../Buttons/BtnCancell/BtnCancell";
import CloseBtn from "../../../Buttons/BtnClose/BtnClose";
import styles from "./DeleteAccount.module.scss";
import PropTypes from "prop-types";

function DeleteAccount({ handleActive }) {
  return (
    <div className={styles.DeleteAccount}>
      <div className={styles.headline}>
        <header>Account deletion</header>
        <CloseBtn handleBtn={handleActive} />
      </div>
      <p className={styles.paragraph}>Are you sure to delete your account?</p>
      <div className={styles.btns}>
        <BtnCancell handleBlurScreen={handleActive} />
        <BtnRemoveData />
      </div>
    </div>
  );
}
DeleteAccount.propTypes = {
  handleActive: PropTypes.func,
};
export default DeleteAccount;
