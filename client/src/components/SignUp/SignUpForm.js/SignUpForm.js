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

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Must be 3 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Must be 3 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .test("Unique Email", "Email already exists", async (email) => {
      const { data: success } = await axios.post(
        "http://localhost:5000/api/users/register/validEmail",
        { email: email }
      );
      return success;
    }),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Required"),
  passwordConfirmation: Yup.string().test(
    "passwords-match",
    "Passwords must match",
    function (value) {
      return this.parent.password === value;
    }
  ),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required"
  ),
});

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
          "http://localhost:5000/api/users",
          values
        );
        if (response.status === 200) return true;
        return false;
      } catch (err) {
        return false;
      }
    };
    const postRequest = postData();

    if (await postRequest) {
      setSubmitting(false);
      resetForm();
      logIn();
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
        <Form className={styles.formInputs}>
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
