import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import contactData from "../../../data/input_contact_data.json";
import FieldComponent from "../../FormikComponents/FieldComponent/FieldComponent";
import FieldTextarea from "../../FormikComponents/FieldTextarea/FieldTextarea";
import styles from "./EmailContactForm.module.scss";
import BtnContact from "../../Buttons/BtnContact/BtnContact";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(4, "Must be 4 characters or more")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string()
    .required("Required")
    .min(5, "Must be 5 characters or more"),
});

const initialValues = {
  fullName: "",
  email: "",
  message: "",
};

function EmailContactForm() {
  const formRef = React.createRef();
  const onSubmitMessage = async (values, { setSubmitting, resetForm }) => {
    try {
      await emailjs.sendForm(
        "service_7afqm2j",
        "template_avigmgr",
        formRef.current,
        "dIx15g4AwWAGhfIJ0"
      );

      alert("Message has been sent successfully!");
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitMessage}
      >
        {({ setFieldValue, values }) => (
          <Form ref={formRef} className={styles.EmailContactForm}>
            <p>Write email to us</p>
            {contactData.contact_form_one.map((item, i) => (
              <FieldComponent item={item} key={i} />
            ))}
            <FieldTextarea setFieldValue={setFieldValue} index={0} />
            <div>
              <BtnContact index={`btnFormContact${23}`} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EmailContactForm;
