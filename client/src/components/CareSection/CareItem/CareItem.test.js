import { render, screen } from "@testing-library/react";
import CareItem from "./CareItem";

test("Shoulde render CareItem component", () => {
  const item = {
    url: "https://res.cloudinary.com/dvoduabha/image/upload/v1679933916/we_care/protect_ofonsc.webp",
    title: "title_test",
    text: "text_title",
  };

  const { container } = render(<CareItem item={item} />);

  expect(container).toMatchSnapshot();
});
