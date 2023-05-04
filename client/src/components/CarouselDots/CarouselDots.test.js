import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CarouselDots from "./CarouselDots";
test("Shoulde render CarouselDots component", () => {
  const { container } = render(<CarouselDots carouselLength={3} />);

  expect(container).toMatchSnapshot();
});

test("First dot should be clicked", async () => {
  const mock = jest.fn();
  render(<CarouselDots carouselLength={3} setSlide={mock} />);

  const elements = screen.getAllByTestId("span-element");

  await user.click(elements[0]);

  expect(mock).toHaveBeenCalledWith(1);
});
