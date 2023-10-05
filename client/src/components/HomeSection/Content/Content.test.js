import { render } from "@testing-library/react";
import Content from "./Content";
import { MemoryRouter } from "react-router-dom";

test("should render Content component", () => {
  const obj = {
    title: "Test",
    text: "test test test test",
    btnText: "btnTest",
  };
  const { container } = render(
    <MemoryRouter>
      <Content obj={obj} slideIndex={1} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
