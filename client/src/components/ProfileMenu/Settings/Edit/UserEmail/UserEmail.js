import { Form, Formik } from "formik";
import React from "react";
import BtnClose from "../../../../Buttons/BtnClose/BtnClose";
import BtnSave from "../../../../Buttons/BtnSave/BtnSave";
import FieldComponent from "../../../../FormikComponents/FieldComponent/FieldComponent";
import styles from "./UserEmail.module.scss";

const initialValues = {};
const validationSchema = {};
const data = [
  { type: "text", name: "currentEmail", placeholder: "Current email" },
  { type: "text", name: "newEmail", placeholder: "New email" },
  { type: "text", name: "confirmEmail", placeholder: "Confirm by password" },
];
function UserEmail({ handleActive }) {
  return (
    <div className={styles.UserEmail}>
      <div className={styles.headLine}>
        <header>Change email</header>
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

export default UserEmail;
