import React from "react";
import { Formik, Form } from "formik";
import styles from "./ContactForm.module.scss";
import ErrMessage from "../../ErrorMessage/ErrMessage";
import FieldComponent from "../../FormikComponents/FieldComponent/FieldComponent";
import TextareaCom from "../../TextareaCom/TextareaCom";
import BtnContact from "../../Buttons/BtnContact/BtnContact";
import * as Yup from "yup";
import postDataUtils from "../../../utils/postDataUtils";
import FieldTextarea from "../../FormikComponents/FieldTextarea/FieldTextarea";

const phoneRegExp = /^[1-9]\d{2}(?:\s?\d{3}){2}$/;
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(4, "Must be 4 characters or more")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  message: Yup.string()
    .required("Required")
    .min(5, "Must be 5 characters or more"),
});
const initialValues = {
  fullName: "",
  number: "",
  message: "",
};
function ContactForm({ formData, title, index }) {
  const onSubmitMessage = async (values, { setSubmitting, resetForm }) => {
    const apiEndpoint = `${process.env.REACT_APP_API_URI}/api/messages/message/post-message`;

    const response = await postDataUtils(apiEndpoint, values);

    setTimeout(() => {
      alert("Message has been sent");
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitMessage}
    >
      {({ setFieldValue }) => (
        <Form className={styles.formContact}>
          <p>{title}</p>
          {formData.map((item, index) => (
            <FieldComponent item={item} key={index} />
          ))}
          <div>
            <FieldTextarea setFieldValue={setFieldValue} />
            <BtnContact index={`btnFormContact${index}`} />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
