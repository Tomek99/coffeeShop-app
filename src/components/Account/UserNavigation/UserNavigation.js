import React from "react";
import { Link } from "react-router-dom";

import styles from "./UserNavigation.module.scss";

import { BsHeart, BsBoxSeam } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";

const navList = [
  { name: "Orders", path: "/orders", element: <RiFileList3Line size={20} /> },
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
    name: "Profile seetings",
    path: "/settings",
    element: <FiSettings size={20} />,
  },
];

function UserNavigation() {
  return (
    <div className={styles.UserNavigation}>
      <div className={styles.divGreeting}>
        <p>Hi,</p>
        <p className={styles.pName}>Tomasz</p>
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
