import { render } from "@testing-library/react";
import SocialMediaElement from "./SocialMediaElement";

test("should render SocialMediaElement component", () => {
  const item = { name: "test", url: "www.facebook.com" };
  const { container } = render(<SocialMediaElement item={item} />);

  expect(container).toMatchSnapshot();
});
