import React, { useContext, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ErrMessage from "../../ErrorMessage/ErrMessage";
import styles from "./SignUpForm.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Contexts/Context";
import signup_fields from "../../../data/signup_fields.json";
import CheckBoxGroup from "./CheckBoxGroup/CheckBoxGroup";
import FieldComponent from "../../FormikComponents/FieldComponent/FieldComponent";
import { validationSchema } from "../../../validationSchemas/signUpValidationSchema";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  acceptTerms: false,
  checkAll: false,
  checked: [],
};

function SignUpForm() {
  const [error, setError] = useState(null);
  const { logIn } = useContext(Context);
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }

  function handleError(flag) {
    if (flag) setError();
    else setError("Someting went wrong, try again");
  }

  async function onSubmit(values, { setSubmitting, resetForm }) {
    const postData = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URI}/api/users`,
          values
        );
        if (response.status === 200) return true;
        return false;
      } catch (err) {
        return false;
      }
    };

    const postRequest = postData();
    const userLogin = { email: values.email, password: values.password };

    if (await postRequest) {
      const isSuccess = await axios.post(
        `${process.env.REACT_APP_API_URI}/api/users/login`,
        userLogin
      );
      setSubmitting(false);
      resetForm();
      logIn(isSuccess.data);
      navigateToHome();
      handleError(true);
    } else handleError(false);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ setFieldValue, values }) => (
        <Form className={styles.formInputs} noValidate>
          {signup_fields.map((item, index) => (
            <FieldComponent item={item} key={index} />
          ))}
          <p className={styles.wrongUrl}>{error}</p>
          <CheckBoxGroup setFieldValue={setFieldValue} values={values} />
          <button type="submit" className={styles.btnSignUp}>
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
