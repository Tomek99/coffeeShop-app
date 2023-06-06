import { render } from "@testing-library/react";
import CarouselArticle from "./CarouselArticle";

test("should render component", () => {
  const { container } = render(<CarouselArticle />);

  expect(container).toMatchSnapshot();
});
