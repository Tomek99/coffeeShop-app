import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./ContactForm.module.scss";
import * as Yup from "yup";
import ErrMessage from "../ErrorMessage/ErrMessage";
import emailjs from "@emailjs/browser";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Must be 4 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
});

const onSubmit = (values, { setSubmitting, resetForm }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    resetForm();
  }, 400);
};

function ContactForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form className={styles.formContact}>
        <p>get in touch</p>
        <div>
          <Field type="text" name="name" placeholder="name" />
          <ErrMessage name="name" />
        </div>

        <div>
          <Field type="text" name="email" placeholder="email" />
          <ErrMessage name="email" />
        </div>

        <div>
          <Field type="text" name="phoneNumber" placeholder="number" />
          <ErrMessage name="phoneNumber" />
        </div>

        <button type="submit">Contact Now</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
