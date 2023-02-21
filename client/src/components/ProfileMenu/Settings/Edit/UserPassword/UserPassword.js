import { Form, Formik } from "formik";
import React from "react";
import BtnClose from "../../../../Buttons/BtnClose/BtnClose";
import BtnSave from "../../../../Buttons/BtnSave/BtnSave";
import FieldComponent from "../../../../FormikComponents/FieldComponent/FieldComponent";
import styles from "./UserPassword.module.scss";

const initialValues = {};
const validationSchema = {};
const data = [
  {
    type: "password",
    name: "currentPassword",
    placeholder: "Current password",
  },
  { type: "password", name: "newPassword", placeholder: "New password" },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Repeat new password",
  },
];

function UserPassword({ handleActive }) {
  return (
    <div className={styles.UserPassword}>
      {" "}
      <div className={styles.headLine}>
        <header>Change password</header>
        <BtnClose handleBtn={handleActive} />
      </div>
      <div className={styles.divForm}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form>
            {data.map((item, index) => (
              <FieldComponent item={item} key={index} />
            ))}
          </Form>
        </Formik>
      </div>
      <div>
        <BtnSave />
      </div>
    </div>
  );
}

export default UserPassword;
