import React, { useContext } from "react";
import styles from "./AdminDashboard.module.scss";
import dashboardData from "../../../data/dashboardData.json";
import { AdminContext } from "../../../Contexts/AdminContext";

function AdminDashboard() {
  const { adminData } = useContext(AdminContext);

  return (
    <div className={styles.AdminDashboard}>
      <h1 className={styles.dashBoardHeader}>
        Welcome to the admin panel {adminData.adminName}!
      </h1>
      <div className={styles.dashBoardContent}>
        {dashboardData.sections.map((item, i) => (
          <div key={i}>
            <h2 className={styles.titleHeader}>
              <span>{i + 1}.</span>
              {item.name}
            </h2>
            {item.categories.map((obj, i) => (
              <ul key={i} className={styles.ulText}>
                <li>
                  <h3>{obj.name}</h3>
                  <p>{obj.description}</p>
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
