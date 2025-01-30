import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import AboutUsNavList from "./AboutUsNavList";

const renderComponent = (mockFn) => {
  return render(<AboutUsNavList switchTab={mockFn} />);
};

describe("Trigger all btns", () => {
  test("First button should be triggered", async () => {
    const mock = jest.fn();
    renderComponent(mock);

    const element = screen.getByRole("button", {
      name: /about us/i,
    });

    await user.click(element);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(0);
  });

  test("Second button should be triggered", async () => {
    const mock = jest.fn();
    renderComponent(mock);

    const element = screen.getByRole("button", {
      name: /our team/i,
    });

    await user.click(element);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(1);
  });

  test("Third button should be triggered", async () => {
    const mock = jest.fn();
    renderComponent(mock);

    const element = screen.getByRole("button", {
      name: /faq/i,
    });

    await user.click(element);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(2);
  });
});
