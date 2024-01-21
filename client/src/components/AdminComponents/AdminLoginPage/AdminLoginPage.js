import React from "react";
import styles from "./AdminLoginPage.module.scss";
import { Form, Formik } from "formik";
import FieldComponent from "../../FormikComponents/FieldComponent/FieldComponent";
import BtnDefault from "../../Buttons/BtnDefault/BtnDefault";
import { validationSchema } from "../../../validationSchemas/adminPanelValidationSchema";

const loginItem = {
  type: "text",
  name: "adminLogin",
  placeholder: "Enter login",
};

const passowrdItem = {
  type: "password",
  name: "adminPassword",
  placeholder: "Enter password",
};

function AdminLoginPage({ handleAdminMode }) {
  function onSubmit(values, { setSubmitting }) {
    handleAdminMode();
  }
  return (
    <div className={styles.AdminLoginPage}>
      <Formik
        initialValues={{ adminLogin: "", adminPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={styles.adminLoginForm}>
          <fieldset className={styles.adminPanelFieldset}>
            <legend>Access to Admin Panel</legend>
          </fieldset>
          <div>
            <label>Login:</label>

            <FieldComponent item={loginItem} />
          </div>
          <div>
            <label>Password:</label>

            <FieldComponent item={passowrdItem} />
          </div>
          <div className={styles.btnsAdminLoginPageActions}>
            <BtnDefault route="" text="Return Home" />
            <button type="subbmit" className={styles.btnTwoAdminLogin}>
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default AdminLoginPage;
