import { render, screen } from "@testing-library/react";
import NBarAside from "./NBarAside";
import user from "@testing-library/user-event";

test("should render NBarAside & mock btn", () => {
  const mockCallback = jest.fn();
  const { container } = render(
    <NBarAside
      isCart={true}
      cartQuantity={5}
      handleBtn={mockCallback}
      title={"test"}
    />
  );

  const element = screen.getByTestId("btnClose1231");
  user.click(element);

  expect(mockCallback).toHaveBeenCalled();
  expect(container).toMatchSnapshot();
});
