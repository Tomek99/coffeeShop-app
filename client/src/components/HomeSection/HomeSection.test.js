import { render } from "@testing-library/react";
import HomeSection from "./HomeSection";

test("should render HomeSection component", () => {
  const { container } = render(<HomeSection />);
  expect(container).toMatchSnapshot();
});
