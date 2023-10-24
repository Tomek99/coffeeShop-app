import { render, screen } from "@testing-library/react";
import BlurScreen from "./BlurScreen";

test("should render BlurScreen component", () => {
  const { container } = render(<BlurScreen />);

  expect(container).toMatchSnapshot();
});
