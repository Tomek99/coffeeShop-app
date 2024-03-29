import { render } from "@testing-library/react";
import LogIn from "./LogIn";
import { MemoryRouter } from "react-router-dom";
import { Context } from "../../Contexts/Context";

window.scrollTo = jest.fn();

test("should render Login component", () => {
  const mock = jest.fn();
  const { container } = render(
    <MemoryRouter>
      <Context.Provider value={{}}>
        <LogIn />
      </Context.Provider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
