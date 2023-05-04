import { render, screen } from "@testing-library/react";
import BlogsSection from "./BlogsSection";

test("should render BlogsSection component", () => {
  const { container } = render(<BlogsSection />);

  expect(container).toMatchSnapshot();
});
