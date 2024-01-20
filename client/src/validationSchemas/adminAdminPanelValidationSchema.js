import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  adminLogin: Yup.string().required("Required"),
  adminPassword: Yup.string().required("Required"),
});
