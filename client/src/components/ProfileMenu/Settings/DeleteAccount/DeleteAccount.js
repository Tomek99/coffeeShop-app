import React, { useContext } from "react";
import BtnRemoveData from "../../../Buttons/BtnRemoveData/BtnRemoveData";
import BtnCancell from "../../../Buttons/BtnCancell/BtnCancell";
import CloseBtn from "../../../Buttons/BtnClose/BtnClose";
import styles from "./DeleteAccount.module.scss";
import PropTypes from "prop-types";
import axios from "axios";
import { Context } from "../../../../Contexts/Context";

function DeleteAccount({ handleActive }) {
  const { user, logOut } = useContext(Context);

  async function removeAccount() {
    const fetchData = await axios.delete(
      `${process.env.REACT_APP_API_URI}/api/users/delete-user`,
      { data: user }
    );

    if (fetchData.data) {
      logOut();
    }
  }

  return (
    <div className={styles.DeleteAccount}>
      <div className={styles.headline}>
        <header>Account deletion</header>
        <CloseBtn handleBtn={handleActive} />
      </div>
      <p className={styles.paragraph}>Are you sure to delete your account?</p>
      <div className={styles.btns}>
        <BtnCancell handleBlurScreen={handleActive} />
        <BtnRemoveData handleBtn={removeAccount} />
      </div>
    </div>
  );
}
DeleteAccount.propTypes = {
  handleActive: PropTypes.func,
};
export default DeleteAccount;
