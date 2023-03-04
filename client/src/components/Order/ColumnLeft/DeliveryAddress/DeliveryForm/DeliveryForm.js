import React from "react";
import styles from "./DeliveryForm.module.scss";
import * as Yup from "yup";
import address_date from "../../../../../data/address_data.json";
import { Form, Formik } from "formik";
import FieldComponent from "../../../../FormikComponents/FieldComponent/FieldComponent";

const initialValues = {
  name: "",
  street: "",
  house: "",
  ZIP_code: "",
  city: "",
  number: "",
  email: "",
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  email: Yup.string().email().required("Required"),
});

function DeliveryForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // onSubmit={onSubmit}
    >
      <Form>
        <div className={styles.DeliveryForm}>
          {address_date.map((item, index) => (
            <FieldComponent item={item} key={index} />
          ))}
        </div>
      </Form>
    </Formik>
  );
}

export default DeliveryForm;
