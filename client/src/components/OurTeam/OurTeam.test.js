import { render } from "@testing-library/react";
import OurTeam from "./OurTeam";

test("should render OurTeam component", () => {
  const { container } = render(<OurTeam />);

  expect(container).toMatchSnapshot();
});
