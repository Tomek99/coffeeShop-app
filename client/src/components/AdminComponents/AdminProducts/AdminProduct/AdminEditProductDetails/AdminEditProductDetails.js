import React from "react";
import styles from "./AdminEditProductDetails.module.scss";
import { Form, Formik } from "formik";
import FieldComponentEdit from "../../../../FormikComponents/FieldComponentEdit/FieldComponentEdit";
import BtnConfirm from "../../../../Buttons/BtnConfirm/BtnConfirm";
import BtnCloseEditProduct from "../../../../Buttons/BtnCloseEditProduct/BtnCloseEditProduct";
import productDetailsData from "../../../../../data/adminEditProductDetails.json";
import { validationSchema } from "../../../../../validationSchemas/adminProductValidationSchema";
import putDataUtil from "../../../../../utils/putDataUtil";

async function onSubmit(values, { setSubmitting }) {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/products`;
  const response = await putDataUtil(apiEndpoint, values);
  window.location.reload();
}

function AdminEditProductDetails({ productDetails, handleAction }) {
  return (
    <div className={styles.AdminEditProductDetails}>
      <Formik
        initialValues={{ ...productDetails }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          {productDetailsData.map((item, index) => (
            <FieldComponentEdit item={item} key={index} />
          ))}
          <div className={styles.btnsActions}>
            <BtnConfirm />
            <BtnCloseEditProduct handleBtn={handleAction} />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default AdminEditProductDetails;
