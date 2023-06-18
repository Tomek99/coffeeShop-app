import React from "react";
import styles from "./AdminNavigationBar.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import {
  BsCartFill,
  BsGlobeAmericas,
  BsCalendar4Event,
  BsCalendar3,
} from "react-icons/bs";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineTrendingUp,
} from "react-icons/md";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { Link } from "react-router-dom";

const clientFacing = [
  { text: "Products", icon: <BsCartFill size="20" /> },
  { text: "Customers", icon: <FaUsers size="20" /> },
  { text: "Transactions", icon: <HiOutlineDocumentChartBar size="20" /> },
  { text: "Geography", icon: <BsGlobeAmericas size="20" /> },
];

const sales = [
  { text: "Overview", icon: <RiComputerLine size="20" /> },
  { text: "Daily", icon: <BsCalendar4Event size="20" /> },
  { text: "Monthly", icon: <BsCalendar3 size="20" /> },
  { text: "Breakdown", icon: <TbTriangleSquareCircle size="20" /> },
];

const management = [
  { text: "Admin", icon: <MdOutlineAdminPanelSettings size="20" /> },
  { text: "Performance", icon: <MdOutlineTrendingUp size="20" /> },
];

function AdminNavigationBar({ openNav, handleNav }) {
  return (
    <div
      className={
        openNav
          ? `${styles.AdminNavigationBar} ${styles.activeDiv}`
          : styles.AdminNavigationBar
      }
    >
      <div className={styles.divLogo}>
        <Link to="/">
          {" "}
          <img
            src="https://res.cloudinary.com/dvoduabha/image/upload/v1681564825/logo_lsboeg.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className={openNav ? styles.divDashboard : styles.divDashboard}>
        <button className={styles.dashboardBtn}>
          <AiOutlineHome size="20" />
          <span>Dashboard</span>
        </button>
      </div>
      <ul className={styles.navBar}>
        <span className={styles.header}>Client Facing</span>
        {clientFacing.map((el, index) => (
          <li key={index} className={styles.adminLiElement}>
            <button>
              {el.icon}
              {el.text}
            </button>
          </li>
        ))}
      </ul>
      <ul className={styles.navBar}>
        <span className={styles.header}>Sales</span>
        {sales.map((el, index) => (
          <li key={index} className={styles.adminLiElement}>
            <button>
              {el.icon}
              {el.text}
            </button>
          </li>
        ))}
      </ul>
      <ul className={styles.navBar}>
        <span className={styles.header}>Management</span>
        {management.map((el, index) => (
          <li key={index} className={styles.adminLiElement}>
            <button>
              {el.icon}
              {el.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminNavigationBar;
