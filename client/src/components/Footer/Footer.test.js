import { render, within, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Footer from "./Footer";
import { MemoryRouter } from "react-router-dom";

function renderComponent() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
}

describe("should render", () => {
  test("footer component", async () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});

describe("should be properly length of links", () => {
  test("render 23 inner links", async () => {
    renderComponent();

    const someDiv = screen.getByTestId("gridTemplatElements");
    const childButtons = within(someDiv).getAllByRole("link");

    expect(childButtons).toHaveLength(23);
  });

  test("render all 28 links", async () => {
    renderComponent();

    const childButtons = screen.getAllByRole("link");

    expect(childButtons).toHaveLength(28);
  });
});
