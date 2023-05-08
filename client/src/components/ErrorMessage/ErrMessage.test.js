import { render } from "@testing-library/react";
import ErrMessage from "./ErrMessage";
import { Formik } from "formik";

test("should render errMessage component", () => {
  const data = "number";
  const { container } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <ErrMessage name={data} />
    </Formik>
  );

  expect(container).toMatchSnapshot();
});
