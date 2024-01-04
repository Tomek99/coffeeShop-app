import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./PopupUserNav1.module.scss";
import { BsHeart, BsTruck } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { Context } from "../../../Contexts/Context";
import { FaRegUser } from "react-icons/fa";
import BtnDefault from "../../Buttons/BtnDefault/BtnDefault";

function PopupUserNav2() {
  const { isLogIn, logOut, user } = useContext(Context);

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
      name: "Address",
      path: "address",
      element: <BsTruck size={20} />,
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
        {navList.map((item) => (
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
