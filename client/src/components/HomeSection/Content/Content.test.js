import { render } from "@testing-library/react";
import Content from "./Content";

test("should render Content component", () => {
  const obj = {
    title: "Test",
    text: "test test test test",
    btnText: "btnTest",
  };
  const { container } = render(<Content obj={obj} slideIndex={1} />);
  expect(container).toMatchSnapshot();
});
