import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  adminLogin: Yup.string().required("Required"),
  adminPassword: Yup.string()
    .required("Required")
    .test(
      "Correct password & login",
      "Invalid data, try again",
      (value, { parent }) => {
        const { adminLogin } = parent || {};

        if (
          adminLogin === process.env.REACT_APP_ADMIN_LOGIN &&
          value === process.env.REACT_APP_ADMIN_PASSWORD
        ) {
          return true;
        }

        return false;
      }
    ),
});
