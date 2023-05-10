import { render } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
import { MemoryRouter } from "react-router-dom";
import { Context } from "../../Contexts/Context";

jest.mock("../Cart/Cart", () => {
  return () => {
    return "No cart component";
  };
});

test("should render NavigationBar component", () => {
  const { container } = render(
    <MemoryRouter>
      <Context.Provider value={{}}>
        <NavigationBar />
      </Context.Provider>
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
