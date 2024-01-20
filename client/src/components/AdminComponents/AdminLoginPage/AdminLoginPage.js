import React from "react";
import styles from "./AdminLoginPage.module.scss";
import { Form, Formik } from "formik";
import FieldComponent from "../../FormikComponents/FieldComponent/FieldComponent";
import BtnDefault from "../../Buttons/BtnDefault/BtnDefault";
import { validationSchema } from "../../../validationSchemas/adminAdminPanelValidationSchema";

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

function AdminLoginPage({ handleLogin }) {
  async function onSubmit(values, { setSubmitting }) {
    console.log(process.env.REACT_APP_ADMIN_LOGIN);
    console.log(process.env.REACT_APP_ADMIN_PASSWORD);
    if (
      values.adminLogin === process.env.REACT_APP_ADMIN_LOGIN &&
      values.adminPassword === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      handleLogin();
    }
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
{
  /* <input
type="text"
placeholder="Enter login"
className={styles.inputText}
/>
<input
type="password"
placeholder="Enter password"
className={styles.inputText}
/> */
}
export default AdminLoginPage;
