import { render, screen } from "@testing-library/react";
import AboutSection from "./AboutSection";
import { MemoryRouter } from "react-router-dom";

test("should render component", async () => {
  const { container } = render(
    <MemoryRouter>
      <AboutSection />
    </MemoryRouter>
  );

  await screen.findByRole("button");

  expect(container).toMatchSnapshot();
});
