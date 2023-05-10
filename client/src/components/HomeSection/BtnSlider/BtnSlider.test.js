import { render, screen } from "@testing-library/react";
import BtnSlider from "./BtnSlider";
import user from "@testing-library/user-event";

test("should render BtnSlider component", () => {
  const mock = jest.fn();
  const { container } = render(
    <BtnSlider handlerBtn={mock} arrowDirect="right" />
  );
  expect(container).toMatchSnapshot();
});

test("BtnSlider component should be called", async () => {
  const mock = jest.fn();

  render(<BtnSlider handlerBtn={mock} arrowDirect="right" />);
  const foundElement = screen.getByRole("button");

  await user.click(foundElement);

  expect(mock).toHaveBeenCalled();
});
