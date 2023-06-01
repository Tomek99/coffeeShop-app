import { render } from "@testing-library/react";
import FieldComponent from "./FieldComponent";
import { Formik } from "formik";
test("should render FieldComponent component", () => {
  const item = {
    type: "text",
    name: "firstName",
    placeholder: "first name",
  };
  const { container } = render(
    <Formik>
      <FieldComponent item={item} />
    </Formik>
  );
  expect(container).toMatchSnapshot();
});
