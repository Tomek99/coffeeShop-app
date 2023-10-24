import { render } from "@testing-library/react";
import TeamMember from "./TeamMember";

const item = {
  url: "test",
  name: "test",
  position: "test",
  text: "test",
};

test("should render TeamMember component", () => {
  const mock = jest.fn();

  const { container } = render(
    <TeamMember item={item} handleShowMember={mock} showMember={1} id={1} />
  );

  expect(container).toMatchSnapshot();
});
