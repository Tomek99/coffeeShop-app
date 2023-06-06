import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   Routes: () => <div data-component="Routes" />,
//   useLocation: () => ({
//     pathname: "",
//   }),
// }));

// jest.mock("./components");
jest.mock("react-messenger-customer-chat", () => {
  return () => {
    return <div>MesseengerChat</div>;
  };
});

test("rendering required component", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
