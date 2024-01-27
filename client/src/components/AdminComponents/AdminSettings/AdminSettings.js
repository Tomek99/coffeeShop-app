import React from "react";
import styles from "./AdminSettings.module.scss";
import useFetchData from "../../../hooks/useFetchData";
import LoaderSpinner from "../../LoaderSpinner/LoaderSpinner";
import AdminSettingsNewUserForm from "./AdminSettingsNewUserForm/AdminSettingsNewUserForm";
import AdminSettingsUserItem from "./AdminSettingsUserItem/AdminSettingsUserItem";

function AdminSettings() {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/admin/getUsers`;
  const { isLoaded, data } = useFetchData(apiEndpoint);

  return (
    <div className={styles.AdminSettings}>
      <AdminSettingsNewUserForm />
      {isLoaded ? (
        <LoaderSpinner loading={isLoaded} />
      ) : (
        data.map((item, i) => <AdminSettingsUserItem item={item} key={i} />)
      )}
    </div>
  );
}

export default AdminSettings;
