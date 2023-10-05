import { render } from "@testing-library/react";
import HomeSection from "./HomeSection";
import { MemoryRouter } from "react-router-dom";

test("should render HomeSection component", () => {
  const { container } = render(
    <MemoryRouter>
      <HomeSection />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
