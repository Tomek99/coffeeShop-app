import { Form, Formik } from "formik";
import React from "react";
import CloseBtn from "../../../../Buttons/CloseBtn/CloseBtn";
import SaveBtn from "../../../../Buttons/SaveBtn/SaveBtn";
import styles from "./EditInvoice.module.scss";
import invoice_date from "../../../../../data/invoice_data.json";
import FieldComponent from "../../../../FormikComponents/FieldComponent/FieldComponent";
import * as Yup from "yup";
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

function EditInvoice({ handleBlurScreen, userData }) {
  return (
    <div className={styles.EditInvoice}>
      <div className={styles.flexBoxDiv}>
        <div className={styles.headerDiv}>
          <header className={styles.headerName}>Add invoice details </header>
          <CloseBtn handleBtn={handleBlurScreen} />
        </div>
        <Formik
          initialValues={Boolean(userData) ? userData : initialValues}
          validationSchema={validationSchema}
        >
          <Form className={styles.columnForm}>
            <div className={styles.divInputs}>
              {invoice_date.map((item, index) => (
                <FieldComponent item={item} key={index} />
              ))}
            </div>

            <SaveBtn />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EditInvoice;
