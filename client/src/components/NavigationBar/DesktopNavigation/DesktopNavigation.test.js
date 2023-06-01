import { render } from "@testing-library/react";
import DesktopNavigation from "./DesktopNavigation";
import { MemoryRouter } from "react-router-dom";

test("should render DesktopNavigation component", () => {
  const { container } = render(
    <MemoryRouter>
      <DesktopNavigation />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
