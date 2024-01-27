import { Field, Form, Formik } from "formik";
import React from "react";
import styles from "./AdminSettings.module.scss";
import FieldComponent from "../../FormikComponents/FieldComponent/FieldComponent";
import adminSettingsData from "../../../data/adminSettingsData.json";

const intitialValues = {
  adminName: "",
  adminLogin: "",
  adminPassword: "",
  adminMode: "",
};

function AdminSettings() {
  return (
    <div>
      <Formik initialValues={intitialValues}>
        <Form className={styles.admin}>
          <label>
            <Field type="radio" name="mode" value="owner" />
            Owner
          </label>
          <label>
            <Field type="radio" name="mode" value="worker" />
            Worker
          </label>
          <div>
            {adminSettingsData.map((item, i) => (
              <FieldComponent item={item} key={i} />
            ))}
          </div>
        </Form>
      </Formik>

      <div></div>
    </div>
  );
}

export default AdminSettings;
