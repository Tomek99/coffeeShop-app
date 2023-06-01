import { render } from "@testing-library/react";
import HeaderSection from "./HeaderSection";

test("should render HeaderSection component", () => {
  const { container } = render(
    <HeaderSection firstWord="Our" secondWord="products" />
  );
  expect(container).toMatchSnapshot();
});
