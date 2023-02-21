import { Form, Formik } from "formik";
import React from "react";
import BtnClose from "../../../../Buttons/BtnClose/BtnClose";
import BtnSave from "../../../../Buttons/BtnSave/BtnSave";
import FieldComponent from "../../../../FormikComponents/FieldComponent/FieldComponent";
import styles from "./UserData.module.scss";
import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
  firstName: "",
  lastName: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Must be 3 characters or more")
    .required("This field is required. Complete data."),
  lastName: Yup.string()
    .min(3, "Must be 3 characters or more")
    .required("This field is required. Complete data."),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
});
const data = [
  { type: "text", name: "firstName", placeholder: "First name" },
  { type: "text", name: "lastName", placeholder: "Last name" },
  { type: "text", name: "number", placeholder: "Number" },
];

const onSubmit = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  }, 400);
};

function UserData({ handleActive }) {
  return (
    <div className={styles.UserData}>
      <div className={styles.headLine}>
        <header>Your data</header>
        <BtnClose handleBtn={handleActive} userSettings={true} />
      </div>
      <div className={styles.divForm}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            {data.map((item, index) => (
              <FieldComponent item={item} key={index} />
            ))}
            <div>
              <BtnSave />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default UserData;
