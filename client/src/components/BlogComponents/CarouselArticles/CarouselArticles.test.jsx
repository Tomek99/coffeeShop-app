import { render } from "@testing-library/react";
import CarouselArticles from "./CarouselArticles";

test("should render component", () => {
  const { container } = render(<CarouselArticles />);

  expect(container).toMatchSnapshot();
});
