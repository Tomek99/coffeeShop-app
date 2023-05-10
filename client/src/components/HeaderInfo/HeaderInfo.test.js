import { render } from "@testing-library/react";
import HeaderInfo from "./HeaderInfo";

test("should render HeaderInfo component", () => {
  const { container } = render(<HeaderInfo title="TEST" />);
  expect(container).toMatchSnapshot();
});
