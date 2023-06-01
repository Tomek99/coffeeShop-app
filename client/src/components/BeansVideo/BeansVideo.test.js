import { render, screen } from "@testing-library/react";
import BeansVideo from "./BeansVideo";

test("Should render BeansVideo component", () => {
  const { container } = render(<BeansVideo />);

  expect(container).toMatchSnapshot();
});
