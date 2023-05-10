import { render } from "@testing-library/react";
import NavigationBarOrder from "./NavigationBarOrder";
import { MemoryRouter } from "react-router-dom";

test("should render NavigationBarOrder", () => {
  const { container } = render(
    <MemoryRouter>
      <NavigationBarOrder />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
