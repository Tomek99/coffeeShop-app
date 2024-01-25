import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./UserNavigation.module.scss";

import { BsHeart, BsBoxSeam, BsTruck } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { Context } from "../../../Contexts/Context";
import user_navigation from "../../../data/user_naviagation.json";

// const navList = user_navigation.map((item) => {
//   return { ...item, element: JSON.parse(item.element) };

const navList = [
  {
    name: "Orders",
    path: "/purchased-products",
    element: <RiFileList3Line size={20} />,
  },
  {
    name: "Returns and Complaints",
    path: "/returns",
    element: <BsBoxSeam size={20} />,
  },
  { name: "Wish list", path: "/wish-list", element: <BsHeart size={20} /> },
  {
    name: "Reviews",
    path: "/user-reviews",
    element: <MdOutlineReviews size={20} />,
  },
  {
    name: "Address",
    path: "/address",
    element: <BsTruck size={20} />,
  },
  {
    name: "Profile seetings",
    path: "/settings",
    element: <FiSettings size={20} />,
  },
];

function UserNavigation() {
  const { user } = useContext(Context);
  return (
    <div className={styles.UserNavigation}>
      <div className={styles.divGreeting}>
        {user.firstName ? (
          <>
            <p>Hi,</p>
            <p className={styles.pName}>{user.firstName}</p>
          </>
        ) : null}
      </div>
      <div className={styles.navList}>
        {navList.map((item) => (
          <Link key={item.name} to={item.path} className={styles.link}>
            {item.element}
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserNavigation;
