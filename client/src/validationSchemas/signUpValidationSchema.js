import axios from "axios";
import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .matches(
      /^[a-zA-Z0-9._%]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .test("Unique Email", "Email already exists", async (email) => {
      const { data: success } = await axios.post(
        `${process.env.REACT_APP_API_URI}/api/users/register/validEmail`,
        { email: email }
      );
      return success;
    }),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .max(30, "Password is too long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    })
    .required("Required"),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required"
  ),
});
