import { render } from "@testing-library/react";
import ParagraphElement from "./ParagraphElement";

test("should render ParagraphElement component", () => {
  const data = { name: "test" };
  const icon = "testIcon";

  const { container } = render(
    <ParagraphElement text={data.name} icon={icon} />
  );

  expect(container).toMatchSnapshot();
});
