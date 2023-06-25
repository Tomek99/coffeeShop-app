import { render } from "@testing-library/react";
import Categories from "./Categories";

test("should render component", () => {
  const { container } = render(<Categories />);

  expect(container).toMatchSnapshot();
});
