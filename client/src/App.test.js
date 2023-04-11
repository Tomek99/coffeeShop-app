import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Routes: () => <div data-component="Routes" />,
  useLocation: () => ({
    pathname: "",
  }),
}));

jest.mock("./components");

test("rendering required component", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
