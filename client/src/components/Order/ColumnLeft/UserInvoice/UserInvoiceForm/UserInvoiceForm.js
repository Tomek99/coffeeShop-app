import React from "react";
import styles from "./UserInvoiceForm.module.scss";
import * as Yup from "yup";

import user_invoice_data from "../../../../../data/user_invoice_data.json";
import { Form, Formik } from "formik";
import FieldComponent from "../../../../FormikComponents/FieldComponent/FieldComponent";

const initialValues = {
  name: "",
  street: "",
  ZIP_code: "",
  city: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  street: Yup.string().required("Required"),
  ZIP_code: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});

function UserInvoiceForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // onSubmit={onSubmit}
    >
      <Form>
        <div className={styles.InvoiceForm}>
          {user_invoice_data.map((item, index) => (
            <FieldComponent item={item} key={index} />
          ))}
        </div>
      </Form>
    </Formik>
  );
}

export default UserInvoiceForm;
