import { render, screen } from "@testing-library/react";
import CareSection from "./CareSection";
test("Shoulde render CareSection component", () => {
  const { container } = render(<CareSection />);

  expect(container).toMatchSnapshot();
});
