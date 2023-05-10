import { render } from "@testing-library/react";
import RegisterReference from "./RegisterReference";
import { MemoryRouter } from "react-router-dom";

test("should render RegisterReference component", () => {
  const { container } = render(
    <MemoryRouter>
      <RegisterReference />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
