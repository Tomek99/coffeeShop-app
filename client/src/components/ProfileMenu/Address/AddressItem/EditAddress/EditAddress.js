import { Form, Formik } from "formik";
import React, { useContext } from "react";
import BtnSave from "../../../../Buttons/BtnSave/BtnSave";
import styles from "./EditAddress.module.scss";
import FieldComponent from "../../../../FormikComponents/FieldComponent/FieldComponent";
import address_date from "../../../../../data/address_data.json";
import BtnClose from "../../../../Buttons/BtnClose/BtnClose";
import * as Yup from "yup";
import PropTypes from "prop-types";
import axios from "axios";
import { AddressContext } from "../../../../../Contexts/AddressContext";

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

function EditAddress({ userAddress, handleBlurScreen, idDocuments }) {
  const { editAddress } = useContext(AddressContext);

  const onSubmit = (values) => {
    const elements = { idDocuments, ...values };
    const postData = async () => {
      try {
        const response = await axios.put(
          "http://localhost:5000/api/addresses/user-address/edit-address",
          elements
        );

        if (response.status === 200) {
          editAddress(response.data.addresses);
          handleBlurScreen();
        }
      } catch (error) {
        console.log(error);
      }
    };

    postData();
  };
  return (
    <div className={styles.EditAddress}>
      <div className={styles.GridDiv}>
        <div className={styles.headerDiv}>
          <header className={styles.headerName}>Edit address details </header>
          <BtnClose handleBtn={handleBlurScreen} />
        </div>
        <Formik
          initialValues={Boolean(userAddress) ? userAddress : initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className={styles.columnForm}>
            <div className={styles.divInputs}>
              {address_date.map((item, index) => (
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
EditAddress.propTypes = {
  userAddress: PropTypes.object,
  idDocument: PropTypes.string,
  idDocuments: PropTypes.string,
  handleBlurScreen: PropTypes.func,
};
export default EditAddress;
