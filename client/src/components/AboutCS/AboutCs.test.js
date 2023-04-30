import { render, screen } from "@testing-library/react";
import AboutCs from "./AboutCs";

test("should render component", () => {
  const { container } = render(<AboutCs />);

  expect(container).toMatchSnapshot();
});
