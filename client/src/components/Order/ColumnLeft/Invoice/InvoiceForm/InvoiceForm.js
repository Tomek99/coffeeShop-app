import React from "react";
import styles from "./InvoiceForm.module.scss";
import * as Yup from "yup";

import invoice_data from "../../../../../data/invoice_data.json";
import { Form, Formik } from "formik";
import FieldComponent from "../../../../FormikComponents/FieldComponent/FieldComponent";

const initialValues = {
  NIP: "",
  name: "",
  street: "",
  ZIP_code: "",
  city: "",
};

const validationSchema = Yup.object().shape({
  NIP: Yup.string(),
  name: Yup.string().required("Required"),
  street: Yup.string().required("Required"),
  ZIP_code: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});

function InvoiceForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // onSubmit={onSubmit}
    >
      <Form>
        <div className={styles.InvoiceForm}>
          {invoice_data.map((item, index) => (
            <FieldComponent item={item} key={index} />
          ))}
        </div>
      </Form>
    </Formik>
  );
}

export default InvoiceForm;
