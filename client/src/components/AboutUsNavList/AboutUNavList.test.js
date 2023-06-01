import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import AboutUsNavList from "./AboutUsNavList";

test("Should render AbousUsNavList component", async () => {
  const { container } = render(<AboutUsNavList />);

  expect(container).toMatchSnapshot();
});

test("First button should be triggered", async () => {
  const mock = jest.fn();

  render(<AboutUsNavList switchTab={mock} />);

  const element = screen.getByRole("button", {
    name: /about us/i,
  });

  await user.click(element);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith(0);
});

const pause = () => new Promise((resolve) => setTimeout(resolve, 100));
