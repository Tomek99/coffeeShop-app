import { render, screen } from "@testing-library/react";
import LinkElement from "./LinkElement";
import { MemoryRouter } from "react-router-dom";
test("should render LinkElement component", async () => {
  const item = { name: "test", path: "test" };
  const { container } = render(
    <MemoryRouter>
      <LinkElement item={item} />
    </MemoryRouter>
  );

  await screen.findByRole("link");
  expect(container).toMatchSnapshot();
});
