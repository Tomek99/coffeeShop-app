import React from "react";
import styles from "./AdminAddNewProduct.module.scss";
import { Form, Formik } from "formik";
import FieldComponentEdit from "../../../../FormikComponents/FieldComponentEdit/FieldComponentEdit";
import BtnConfirm from "../../../../Buttons/BtnConfirm/BtnConfirm";
import BtnCloseEditProduct from "../../../../Buttons/BtnCloseEditProduct/BtnCloseEditProduct";
import productDetailsData from "../../../../../data/adminEditProductDetails.json";
import { validationSchema } from "../../../../../validationSchemas/adminProductValidationSchema";
import axios from "axios";

const initialValues = {
  imageUrl: "",
  name: "",
  price: "",
  oldPrice: "",
  quantity: "",
  origin: "",
  brand: "",
  type: "",
  intensity: "",
  weight: "",
  available: "",
};

async function onSubmit(values, { setSubmitting }) {
  await axios.post(`${process.env.REACT_APP_API_URI}/api/products`, {
    ...values,
  });

  window.location.reload();
}

function AdminAddNewProduct({ handleNewProductIsDisplayed }) {
  return (
    <div className={styles.AdminAddNewProduct}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          {productDetailsData.map((item, index) =>
            item.inputDisabled ? null : (
              <FieldComponentEdit item={item} key={index} />
            )
          )}
          <div className={styles.btnsActions}>
            <BtnConfirm />
            <BtnCloseEditProduct handleBtn={handleNewProductIsDisplayed} />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default AdminAddNewProduct;
