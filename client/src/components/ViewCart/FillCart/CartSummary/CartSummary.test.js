import { screen, render } from "@testing-library/react";
import CartSummary from "./CartSummary";
import { Context } from "../../../../Contexts/Context";
import { MemoryRouter } from "react-router-dom";

test("should render CartSummary component", () => {
  const cartValue = 30;
  const cartSave = 10;

  const { container } = render(
    <MemoryRouter>
      <Context.Provider value={{ cartValue, cartSave }}>
        <CartSummary />
      </Context.Provider>
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
