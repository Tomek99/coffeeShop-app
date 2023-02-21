import React, { useContext } from "react";
import styles from "./AddInvoice.module.scss";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import BtnClose from "../../../Buttons/BtnClose/BtnClose";
import invoice_date from "../../../../data/invoice_data.json";
import FieldComponent from "../../../FormikComponents/FieldComponent/FieldComponent";
import * as Yup from "yup";
import BtnSave from "../../../Buttons/BtnSave/BtnSave";
import { AddressContext } from "../../../../Contexts/AddressContext";
import axios from "axios";

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

function AddInvoice({ idInvoices }) {
  const { handleBlurScreen, addInvoice } = useContext(AddressContext);

  const onSubmit = (values) => {
    const elements = { _id: idInvoices, ...values };
    const postData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/invoices/user-invoice",
          elements
        );

        if (response.status === 200) {
          addInvoice(response.data.invoices);
          handleBlurScreen();
        }
      } catch (error) {
        console.log(error);
      }
    };

    postData();
  };
  return (
    <div className={styles.AddInvoice}>
      <div className={styles.flexBoxDiv}>
        <div className={styles.headerDiv}>
          <header className={styles.headerName}>Add invoice details </header>
          <BtnClose handleBtn={handleBlurScreen} />
        </div>
        <Formik
          initialValues={initialValues}
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
AddInvoice.propTypes = {
  handleBlurScreen: PropTypes.func,
};
export default AddInvoice;
