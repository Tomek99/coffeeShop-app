import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import styles from "./AdminSettingsNewUserForm.module.scss";
import FieldComponent from "../../../FormikComponents/FieldComponent/FieldComponent";
import adminSettingsData from "../../../../data/adminSettingsData.json";
import postDataUtils from "../../../../utils/postDataUtils";
import * as Yup from "yup";
import ErrMessage from "../../../ErrorMessage/ErrMessage";

const validationSchema = Yup.object({
  adminName: Yup.string().required("Required"),
  adminLogin: Yup.string().required("Required"),
  adminPassword: Yup.string().required("Required"),
  adminMode: Yup.string().required("Please choose an option"),
});

const intitialValues = {
  adminName: "",
  adminLogin: "",
  adminPassword: "",
  adminMode: "",
};

const onSubmit = async (values, { setSubmitting }) => {
  const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/admin/postUser`;
  const reponse = await postDataUtils(apiEndpoint, values);

  window.location.reload();
};

function AdminSettingsNewUserForm() {
  return (
    <Formik
      initialValues={intitialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.AdminSettingsNewUserForm}>
        <div>
          <label>
            <Field type="radio" name="adminMode" value="owner" />
            Owner
          </label>
          <label>
            <Field type="radio" name="adminMode" value="worker" />
            Worker
          </label>
          <ErrMessage name="adminMode" />
        </div>
        <div>
          {adminSettingsData.map((item, i) => (
            <FieldComponent item={item} key={i} />
          ))}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default AdminSettingsNewUserForm;
