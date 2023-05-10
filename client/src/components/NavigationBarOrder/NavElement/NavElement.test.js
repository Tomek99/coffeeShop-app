import { render } from "@testing-library/react";
import NavElement from "./NavElement";
import { MemoryRouter } from "react-router-dom";

const item = { text: "test", path: "/test" };
const id = "gsr21r21r";
const tab = 0;

test("should render NavElement component", () => {
  const { container } = render(
    <MemoryRouter>
      <NavElement item={item} id={id} tab={tab} />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
