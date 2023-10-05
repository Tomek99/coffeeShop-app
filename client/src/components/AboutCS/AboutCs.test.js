import { render, screen } from "@testing-library/react";
import AboutCs from "./AboutCs";

window.scrollTo = jest.fn();

test("should render component", () => {
  const { container } = render(<AboutCs />);

  expect(container).toMatchSnapshot();
});
