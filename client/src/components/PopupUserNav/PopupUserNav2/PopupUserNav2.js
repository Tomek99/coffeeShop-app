import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./PopupUserNav2.module.scss";
import popUserNavData from "../../../data/popUserNavData";
import NBarAside from "../../NBarAside/NBarAside";
import { Context } from "../../../Contexts/Context";

function PopupUserNav2({ isAsideOpen, handleAside }) {
  const { isLogIn, logOut, user } = useContext(Context);

  return (
    <>
      <ul
        className={
          isAsideOpen
            ? `${styles.PopupUserProfile2} ${styles.active}`
            : styles.PopupUserProfile2
        }
      >
        <NBarAside isCart={false} handleBtn={handleAside} title="Account" />
        {isLogIn ? (
          <div className={styles.userName}>
            <p>Hi,</p>
            <p>{user.firstName}</p>
          </div>
        ) : (
          <div className={styles.btnSignIn_UpSection}>
            <li className={styles.btnSignIn_Up}>
              <Link to="log-in" onClick={handleAside}>
                Log in
              </Link>
            </li>

            <li className={styles.infoAcc}>Don't have an account?</li>
            <li className={styles.btnSignIn_Up}>
              <Link to="sign-up" onClick={handleAside}>
                Sign up
              </Link>
            </li>
          </div>
        )}
        <div className={styles.list}>
          {popUserNavData.map((item) => (
            <li key={item.name}>
              <Link to={item.path} onClick={handleAside}>
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
    </>
  );
}

export default PopupUserNav2;
