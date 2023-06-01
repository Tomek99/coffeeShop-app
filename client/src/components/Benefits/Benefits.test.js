import { render, screen } from "@testing-library/react";
import Benefits from "./Benefits";

test("should render Benefits component", () => {
  const { container } = render(<Benefits />);

  expect(container).toMatchSnapshot();
});
