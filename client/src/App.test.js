import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders learn react link", () => {
  render(<App />);
  const linmkElement = screen.getByText(/fresh coffee in the morning/i);
  expect(linmkElement).toBeInTheDocument();
});
