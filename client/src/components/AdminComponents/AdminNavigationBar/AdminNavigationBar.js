import React, { useContext } from "react";
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
import PageLogo from "../../PageLogo/PageLogo";
import { AdminContext } from "../../../Contexts/AdminContext";

const clientFacing = [
  { text: "Customers", icon: <FaUsers size="20" />, path: "customers" },

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

const sales = [
  { text: "Products", icon: <BsCartFill size="20" />, path: "products" },
  {
    text: "Transactions",
    icon: <HiOutlineDocumentChartBar size="20" />,
    path: "transactions",
  },
];

const management = [
  {
    text: "Admin",
    icon: <MdOutlineAdminPanelSettings size="20" />,
    path: "admin-management",
  },
];

function AdminNavigationBar() {
  const { openNav, adminData } = useContext(AdminContext);

  return (
    <div
      className={
        openNav
          ? `${styles.AdminNavigationBar} ${styles.activeDiv}`
          : styles.AdminNavigationBar
      }
    >
      <PageLogo />
      <div className={openNav ? styles.divDashboard : styles.divDashboard}>
        <Link to={""} className={styles.dashboardLink}>
          <AiOutlineHome size="20" />
          <span>Dashboard</span>
        </Link>
      </div>

      <AdminUnorderedList header={"Client Facing"} arrayLinks={clientFacing} />
      <AdminUnorderedList header={"Sales"} arrayLinks={sales} />
      {adminData.adminMode !== "worker" ? (
        <AdminUnorderedList header={"Management"} arrayLinks={management} />
      ) : null}
    </div>
  );
}

export default AdminNavigationBar;
