import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrMessage from "../../ErrorMessage/ErrMessage";
import styles from "./SignUpForm.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Contexts/Context";

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
        "http://localhost:5000/api/goals/register/validEmail",
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
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required"
  ),
});

const fieldData = [
  {
    type: "text",
    name: "firstName",
    placeholder: "First name",
  },
  {
    type: "text",
    name: "lastName",
    placeholder: "Last name",
  },
  {
    type: "email",
    name: "email",
    placeholder: "E-mail",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
  },
  {
    type: "password",
    name: "passwordConfirmation",
    placeholder: "Confirm password",
  },
];

function SignUpForm() {
  const { logIn } = useContext(Context);
  const navigate = useNavigate();

  function navigateSignUp() {
    navigate("/");
  }

  function onSubmit(values, { setSubmitting, resetForm }) {
    axios
      .post("http://localhost:5000/api/goals", values)
      // .then(() => {
      //   alert(JSON.stringify(values, null, 2));
      // })
      .catch((err) => {
        console.log(err);
      });

    setSubmitting(false);
    resetForm();
    logIn();
    navigateSignUp();
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
          {fieldData.map((item) => (
            <div className={styles.formInput} key={item.name}>
              <Field
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                className={styles.inputText}
              />

              <ErrMessage name={item.name} />
            </div>
          ))}

          <div role="group" className={styles.checkboxGroup}>
            <h3>Formal consents</h3>
            <label>
              <Field
                type="checkbox"
                name="checkAll"
                className={styles.inputCheckbox}
                onClick={() => {
                  if (values.checkAll) {
                    setFieldValue("checked", (values.checked = []));
                    setFieldValue("acceptTerms", (values.acceptTerms = false));
                  } else {
                    setFieldValue(
                      "checked",
                      (values.checked = ["Two", "Three"])
                    );
                    setFieldValue("acceptTerms", (values.acceptTerms = true));
                  }
                }}
              />
              Check all
            </label>
            <label>
              <Field
                type="checkbox"
                name="acceptTerms"
                className={styles.inputCheckbox}
              />
              Accept Terms & Conditions*
            </label>
            <ErrorMessage name="acceptTerms">
              {(msg) => <div className={styles.checkBoxMessage}>{msg}</div>}
            </ErrorMessage>

            <label>
              <Field
                type="checkbox"
                name="checked"
                value="Two"
                className={styles.inputCheckbox}
              />
              I want to receive information about current offers
              <br /> and special one in the e-mail message.
            </label>
            <label>
              <Field
                type="checkbox"
                name="checked"
                value="Three"
                className={styles.inputCheckbox}
              />
              I want to receive offers matched to my needs.
            </label>
          </div>
          <button type="submit" className={styles.btnSignUp}>
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
