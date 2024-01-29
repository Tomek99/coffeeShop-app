import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./PopupUserNav1.module.scss";
import { Context } from "../../../Contexts/Context";
import BtnDefault from "../../Buttons/BtnDefault/BtnDefault";
import popUserNavData from "../../../data/popUserNavData";

function PopupUserNav2() {
  const { isLogIn, logOut, user } = useContext(Context);

  return (
    <ul className={`${styles.PopupUserProfile} ${styles.active}`}>
      {isLogIn ? (
        <div className={styles.userName}>
          <p>Hi,</p>
          <p>{user.firstName}</p>
        </div>
      ) : (
        <section className={styles.btnsSection}>
          <BtnDefault route={"log-in"} text={"Log in"} />
          <span className={styles.spanTextAccount}>Don't have an account?</span>
          <BtnDefault route={"sign-up"} text={"Sign up"} />
        </section>
      )}
      <div className={styles.list}>
        {popUserNavData.map((item) => (
          <li key={item.name}>
            <Link to={item.path}>
              {item.element} &nbsp;
              {item.name}
            </Link>
          </li>
        ))}
      </div>
      {isLogIn ? (
        <div className={styles.divLogOut}>
          <button className={styles.btnLogOut} onClick={logOut}>
            Log out
          </button>
        </div>
      ) : null}
    </ul>
  );
}

export default PopupUserNav2;
