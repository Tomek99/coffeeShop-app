import React from "react";
import * as Yup from "yup";
import styles from "./CompanyInvoiceForm.module.scss";
import { Form, Formik } from "formik";
import FieldComponent from "../../../../FormikComponents/FieldComponent/FieldComponent";
import company_invoice_data from "../../../../../data/company_invoice_data.json";

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

function CompanyInvoiceForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // onSubmit={onSubmit}
    >
      <Form>
        <div className={styles.InvoiceForm}>
          {company_invoice_data.map((item, index) => (
            <FieldComponent item={item} key={index} />
          ))}
        </div>
      </Form>
    </Formik>
  );
}

export default CompanyInvoiceForm;
