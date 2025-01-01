import { render } from "@testing-library/react";
import ReviewSection from "./ReviewSection";

test("should render reviewSection", () => {
  const { container } = render(<ReviewSection />);

  expect(container).toMatchSnapshot();
});
