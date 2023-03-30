import React, { useState } from "react";
import { Formik, Form } from "formik";
import styles from "./ContactForm.module.scss";
import ErrMessage from "../ErrorMessage/ErrMessage";
import emailjs from "@emailjs/browser";
import FieldComponent from "../FormikComponents/FieldComponent/FieldComponent";
import TextareaCom from "../TextareaCom/TextareaCom";
import BtnContact from "../Buttons/BtnContact/BtnContact";

const onSubmit = (values, { setSubmitting, resetForm, setFieldValue }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  }, 400);
};

function ContactForm({ initValue, validationSchema, formData, title }) {
  return (
    <Formik
      initialValues={initValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={styles.formContact}>
          <p>{title}</p>
          {formData.map((item, index) => (
            <FieldComponent item={item} key={index} />
          ))}
          <div>
            <TextareaCom setFieldValue={setFieldValue} />
            <ErrMessage name="comment" />
            <BtnContact />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
