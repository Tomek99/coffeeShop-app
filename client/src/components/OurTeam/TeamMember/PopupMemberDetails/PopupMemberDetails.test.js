import { render } from "@testing-library/react";
import PopupMemberDetails from "./PopupMemberDetails";

const item = {
  url: "test",
  name: "test",
  position: "test",
  text: "test",
};

test("should render PopupMemberDetails component", () => {
  const mock = jest.fn();

  const { container } = render(
    <PopupMemberDetails item={item} handleShowMember={mock} id={1} />
  );

  expect(container).toMatchSnapshot();
});
