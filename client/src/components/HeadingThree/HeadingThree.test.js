import { render } from "@testing-library/react";
import HeadingThree from "./HeadingThree";

test("should render HeadingThree component", () => {
  const { container } = render(<HeadingThree title="Test" />);
  expect(container).toMatchSnapshot();
});
