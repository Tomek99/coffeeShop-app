import React from "react";
import { Formik, Form } from "formik";
import styles from "./ContactForm.module.scss";
import ErrMessage from "../../ErrorMessage/ErrMessage";
import emailjs from "@emailjs/browser";
import FieldComponent from "../../FormikComponents/FieldComponent/FieldComponent";
import TextareaCom from "../../TextareaCom/TextareaCom";
import BtnContact from "../../Buttons/BtnContact/BtnContact";

function ContactForm({
  initValue,
  validationSchema,
  formData,
  title,
  index,
  onSubmit,
}) {
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
            <TextareaCom
              setFieldValue={setFieldValue}
              index={`contactFormComment${index}`}
            />
            <ErrMessage name="comment" />
            <BtnContact index={`btnFormContact${index}`} />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
