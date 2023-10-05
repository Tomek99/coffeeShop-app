import { render, screen } from "@testing-library/react";
import ContactSection from "./ContactSection";

window.scrollTo = jest.fn();
test("should render ContactSecton", () => {
  const { container } = render(<ContactSection />);

  expect(container).toMatchSnapshot();
});
