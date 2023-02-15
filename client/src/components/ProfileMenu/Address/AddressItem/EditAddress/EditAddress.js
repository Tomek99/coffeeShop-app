import { Form, Formik } from "formik";
import React from "react";
import SaveBtn from "../../../../Buttons/SaveBtn/SaveBtn";
import styles from "./EditAddress.module.scss";
import FieldComponent from "../../../../FormikComponents/FieldComponent/FieldComponent";
import address_date from "../../../../../data/address_data.json";
import CloseBtn from "../../../../Buttons/CloseBtn/CloseBtn";
import * as Yup from "yup";

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

function EditAddress({ userAddress, handleBlurScreen }) {
  console.log();
  return (
    <div className={styles.EditAddress}>
      <div className={styles.GridDiv}>
        <div className={styles.headerDiv}>
          <header className={styles.headerName}>Edit address details </header>
          <CloseBtn handleBtn={handleBlurScreen} />
        </div>
        <Formik
          initialValues={Boolean(userAddress) ? userAddress : initialValues}
          validationSchema={validationSchema}
        >
          <Form className={styles.columnForm}>
            <div className={styles.divInputs}>
              {address_date.map((item, index) => (
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

export default EditAddress;
