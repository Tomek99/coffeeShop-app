import React, { useContext, useState } from "react";
import styles from "./AdminLoginPage.module.scss";
import { Form, Formik } from "formik";
import FieldComponent from "../../FormikComponents/FieldComponent/FieldComponent";
import BtnDefault from "../../Buttons/BtnDefault/BtnDefault";
import { validationSchema } from "../../../validationSchemas/adminPanelValidationSchema";
import postDataUtils from "../../../utils/postDataUtils";
import inbuiltAdmin from "../../../data/inbuiltAdmin.json";
import { AdminContext } from "../../../Contexts/AdminContext";

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

function AdminLoginPage() {
  const { handleAdminMode, handleAdminData } = useContext(AdminContext);
  const [invalidData, setInvalidData] = useState("");

  async function onSubmit(values, { setSubmitting }) {
    setSubmitting(true);
    setInvalidData("");

    const apiAdminEndpoint = `${process.env.REACT_APP_API_URI}/api/admin/findSingleAdmin`;
    const response = await postDataUtils(apiAdminEndpoint, values);

    if (response) {
      handleAdminMode();
      handleAdminData(response);
    } else if (
      values.adminLogin === process.env.REACT_APP_ADMIN_LOGIN &&
      values.adminPassword === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      handleAdminMode();
      handleAdminData(inbuiltAdmin);
    } else {
      setInvalidData("Invalid data, try again...");
    }

    setSubmitting(false);
  }
  return (
    <div className={styles.AdminLoginPage}>
      <Formik
        initialValues={{ adminLogin: "", adminPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
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
            <p>{invalidData}</p>
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
