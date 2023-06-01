import { render } from "@testing-library/react";
import NavListElement from "./NavListElement";
import { MemoryRouter } from "react-router-dom";

test("should render NavListElement component", () => {
  const { container } = render(
    <MemoryRouter>
      <NavListElement isLink={true} name="test" path="/test" />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
