import React, { useContext } from "react";
import styles from "./AdminSettings.module.scss";
import useFetchData from "../../../hooks/useFetchData";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import AdminSettingsNewUserForm from "./AdminSettingsNewUserForm/AdminSettingsNewUserForm";
import AdminSettingsUserItem from "./AdminSettingsUserItem/AdminSettingsUserItem";
import { AdminContext } from "../../../Contexts/AdminContext";
import { useNavigate } from "react-router-dom";

function AdminSettings() {
  const navigate = useNavigate();
  const { adminData } = useContext(AdminContext);
  if (adminData.adminMode === "worker") {
    navigate("/admin");
  }

  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/admin/getUsers`;
  const { isLoaded, data } = useFetchData(apiEndpoint);

  return (
    <div className={styles.AdminSettings}>
      <AdminSettingsNewUserForm />
      {isLoaded ? (
        <LoaderSpinner loading={isLoaded} />
      ) : (
        <section>
          <h1>Users</h1>
          <div className={styles.usersItems}>
            {data.map((item, i) => (
              <AdminSettingsUserItem item={item} key={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default AdminSettings;
