import { render, within, screen } from "@testing-library/react";
import FooterOrder from "./FooterOrder";
import { MemoryRouter } from "react-router-dom";

test("should render FooterOrder component", () => {
  const { container } = render(
    <MemoryRouter>
      <FooterOrder />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
