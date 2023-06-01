import { render } from "@testing-library/react";
import FAQ from "./FAQ";

test("should render FAQ component", () => {
  const { container } = render(<FAQ />);

  expect(container).toMatchSnapshot();
});
