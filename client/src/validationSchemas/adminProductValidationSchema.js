import * as Yup from "yup";

const digitsAndDotOnly = (value) => /^[\d.]+$/.test(value);

const booleanValueOnly = (value) => {
  if (value === "true" || value === "false") {
    return true; // Validation passes
  }

  return false; // Validation fails
};

export const validationSchema = Yup.object().shape({
  imageUrl: Yup.string().min(2, "Too Short!").required("Required"),
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(1, "Too Short!")
    .required("Required")
    .test("Digits only", "The field should have digits only", digitsAndDotOnly),
  oldPrice: Yup.string()
    .min(1, "Too Short!")
    .test("Digits only", "The field should have digits only", digitsAndDotOnly)
    .required("Required"),
  quantity: Yup.string().max(1, "Too Long!").required("Required"),
  origin: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  brand: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  intensity: Yup.string()
    .min(1, "Too Short!")
    .test("Digits only", "The field should have digits only", digitsAndDotOnly)
    .required("Required"),
  weight: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  type: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  available: Yup.string()
    .min(4, "Too Short!")
    .max(5, "Too Long!")
    .test(
      "Only boolean values",
      "The field should have boolean only",
      booleanValueOnly
    )
    .required("Required"),
});
