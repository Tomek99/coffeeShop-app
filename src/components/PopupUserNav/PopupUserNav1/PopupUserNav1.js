import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./PopupUserNav1.module.scss";
import { BsHeart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { Context } from "../../../Contexts/Context";
import { FaRegUser } from "react-icons/fa";

function PopupUserNav2() {
  const { isLogIn, logOut } = useContext(Context);

  const navList = [
    { name: "Account", path: "account", element: <FaRegUser size={20} /> },
    { name: "Orders", path: "orders", element: <RiFileList3Line size={20} /> },
    { name: "Wish list", path: "wish-list", element: <BsHeart size={20} /> },
    {
      name: "Reviews",
      path: "user-reviews",
      element: <MdOutlineReviews size={20} />,
    },
    {
      name: "Profile seetings",
      path: "settings",
      element: <FiSettings size={20} />,
    },
  ];
  return (
    <ul className={`${styles.PopupUserProfile} ${styles.active}`}>
      {isLogIn ? (
        <div className={styles.userName}>
          <p>Hi,</p>
          <p>Tomasz</p>
        </div>
      ) : (
        <div className={styles.btnSignIn_UpSection}>
          <li className={styles.btnSignIn_Up}>
            <Link to="log-in">Log In</Link>
          </li>

          <li className={styles.infoAcc}>Don't have an account?</li>
          <li className={styles.btnSignIn_Up}>
            <Link to="sign-up">Sign up</Link>
          </li>
        </div>
      )}
      <div className={styles.list}>
        {navList.map((item) => (
          <li key={item.name}>
            <Link to={isLogIn ? item.path : "log-in"}>
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
