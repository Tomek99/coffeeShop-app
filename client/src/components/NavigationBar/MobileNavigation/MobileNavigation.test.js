import { render } from "@testing-library/react";
import MobileNavigation from "./MobileNavigation";
import { MemoryRouter } from "react-router-dom";

test("should render MobileNavigation component", () => {
  const { container } = render(
    <MemoryRouter>
      <MobileNavigation />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
