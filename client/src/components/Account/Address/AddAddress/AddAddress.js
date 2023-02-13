import React from "react";
import styles from "./AddAddress.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CloseBtn from "../../../Buttons/CloseBtn/CloseBtn";
import SaveBtn from "../../../Buttons/SaveBtn/SaveBtn";
import FieldComponent from "../../../FormikComponents/FieldComponent/FieldComponent";
import address_date from "../../../../data/address_data.json";

const initialValues = {
  NIP: "",
  name: "",
  street: "",
  house: "",
  ZIP_code: "",
  city: "",
};

const validationSchema = Yup.object().shape({
  NIP: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  street: Yup.string().required("Required"),
  house: Yup.string().required("Required"),
  ZIP_code: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});

function AddAddress({ handleBlurScreen }) {
  return (
    <div className={styles.AddAddress}>
      <div className={styles.flexBoxDiv}>
        <div className={styles.headerDiv}>
          <header className={styles.headerName}>Add address details </header>
          <CloseBtn handleBtn={handleBlurScreen} />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className={styles.columnForm}>
            {address_date.map((item, index) => (
              <FieldComponent item={item} key={index} />
            ))}
            <SaveBtn />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default AddAddress;
