import React, { useContext } from "react";
import styles from "./AddAddress.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CloseBtn from "../../../Buttons/CloseBtn/CloseBtn";
import SaveBtn from "../../../Buttons/SaveBtn/SaveBtn";
import FieldComponent from "../../../FormikComponents/FieldComponent/FieldComponent";
import address_date from "../../../../data/address_data.json";
import { AddressContext } from "../../../../Contexts/AddressContext";
import PropTypes from "prop-types";
import axios from "axios";

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

function AddAddress({ idAddresses }) {
  const { addAddress } = useContext(AddressContext);

  const onSubmit = async (values) => {
    const elements = { _id: idAddresses, ...values };
    const postData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/addresses/user-address",
          elements
        );

        if (response.status === 200) {
          addAddress(response.data.addresses);
          handleBlurScreen();
        }
        return false;
      } catch (error) {
        console.log(error);
      }
    };

    postData();
  };

  const { handleBlurScreen } = useContext(AddressContext);
  return (
    <div className={styles.AddAddress}>
      <div className={styles.GridDiv}>
        <div className={styles.headerDiv}>
          <header className={styles.headerName}>Add address details </header>
          <CloseBtn handleBtn={handleBlurScreen} />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
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
AddAddress.propTypes = {
  handleBlurScreen: PropTypes.func,
  idAddresses: PropTypes.string,
};
export default AddAddress;
