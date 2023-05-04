import { render, screen } from "@testing-library/react";
import NavListElement from "./NavListBtn";

test("should render NavListBtn", async () => {
  const item = { name: "About Us", number: 0 };
  const { container } = render(<NavListElement item={item} tabNumber={0} />);

  expect(container).toMatchSnapshot();
});
