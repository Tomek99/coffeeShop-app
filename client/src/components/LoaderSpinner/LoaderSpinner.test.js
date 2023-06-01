import { render } from "@testing-library/react";
import LoaderSpinner from "./LoaderSpinner";

test("should render LoaderSpinner component", () => {
  const loading = true;
  const { container } = render(<LoaderSpinner loading={loading} />);

  expect(container).toMatchSnapshot();
});
