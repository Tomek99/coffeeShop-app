import { Form, Formik } from "formik";
import React, { useContext } from "react";
import BtnClose from "../../../../Buttons/BtnClose/BtnClose";
import BtnSave from "../../../../Buttons/BtnSave/BtnSave";
import styles from "./EditInvoice.module.scss";
import invoice_date from "../../../../../data/invoice_data.json";
import FieldComponent from "../../../../FormikComponents/FieldComponent/FieldComponent";
import * as Yup from "yup";
import axios from "axios";
import { AddressContext } from "../../../../../Contexts/AddressContext";
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

function EditInvoice({ handleBlurScreen, userData, idDocuments }) {
  const { editInvoice } = useContext(AddressContext);

  const onSubmit = async (values) => {
    const elements = { idDocuments, ...values };
    const postData = async () => {
      try {
        const response = await axios.put(
          "http://localhost:5000/api/invoices/user-invoice/edit-invoice",
          elements
        );

        if (response.status === 200) {
          editInvoice(response.data.invoices);
          handleBlurScreen();
        }
      } catch (error) {
        console.log(error);
      }
    };

    postData();
  };
  return (
    <div className={styles.EditInvoice}>
      <div className={styles.flexBoxDiv}>
        <div className={styles.headerDiv}>
          <header className={styles.headerName}>Edit invoice details </header>
          <BtnClose handleBtn={handleBlurScreen} />
        </div>
        <Formik
          initialValues={Boolean(userData) ? userData : initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className={styles.columnForm}>
            <div className={styles.divInputs}>
              {invoice_date.map((item, index) => (
                <FieldComponent item={item} key={index} />
              ))}
            </div>

            <BtnSave />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EditInvoice;
