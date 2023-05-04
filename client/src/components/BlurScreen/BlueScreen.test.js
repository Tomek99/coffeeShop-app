import { render, screen } from "@testing-library/react";
import BlurScreen from "./BlurScreen";

test("should first", () => {
  const { container } = render(<BlurScreen />);

  expect(container).toMatchSnapshot();
});
