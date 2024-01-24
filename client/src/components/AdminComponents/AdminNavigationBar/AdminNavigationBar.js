import React from "react";
import styles from "./AdminNavigationBar.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { BsCartFill, BsCalendar4Event, BsCalendar3 } from "react-icons/bs";

import {
  MdOutlineReviews,
  MdOutlineAdminPanelSettings,
  MdOutlineTrendingUp,
} from "react-icons/md";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";
import AdminUnorderedList from "./AdminUnorderedList/AdminUnorderedList";

const clientFacing = [
  { text: "Products", icon: <BsCartFill size="20" />, path: "products" },
  { text: "Customers", icon: <FaUsers size="20" />, path: "customers" },
  {
    text: "Transactions",
    icon: <HiOutlineDocumentChartBar size="20" />,
    path: "transactions",
  },
  {
    text: "Reviews",
    icon: <MdOutlineReviews size="20" />,
    path: "customers-reviews",
  },
  {
    text: "Messages",
    icon: <TiMessages size="20" />,
    path: "customers-messages",
  },
];

// const sales = [
//   { text: "Overview", icon: <RiComputerLine size="20" />, path: "overview" },
//   { text: "Daily", icon: <BsCalendar4Event size="20" />, path: "daily" },
//   { text: "Monthly", icon: <BsCalendar3 size="20" />, path: "monthly" },
//   {
//     text: "Breakdown",
//     icon: <TbTriangleSquareCircle size="20" />,
//     path: "breakdown",
//   },
// ];

// const management = [
//   {
//     text: "Admin",
//     icon: <MdOutlineAdminPanelSettings size="20" />,
//     path: "admin-management",
//   },
//   {
//     text: "Performance",
//     icon: <MdOutlineTrendingUp size="20" />,
//     path: "performance",
//   },
// ];

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
            src="https://res.cloudinary.com/dvoduabha/image/upload/v1687425664/logo1_iw4cvy.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className={openNav ? styles.divDashboard : styles.divDashboard}>
        <Link to={""} className={styles.dashboardBtn}>
          <AiOutlineHome size="20" />
          <span>Dashboard</span>
        </Link>
      </div>

      <AdminUnorderedList header={"Client Facing"} arrayLinks={clientFacing} />
      {/* <AdminUnorderedList header={"Sales"} arrayLinks={sales} />
      <AdminUnorderedList header={"Management"} arrayLinks={management} /> */}
    </div>
  );
}

export default AdminNavigationBar;
