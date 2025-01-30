import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
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

// window.scrollTo = jest.fn();
// jest.mock("react-messenger-customer-chat", () => {
//   return () => {
//     return <div>MesseengerChat</div>;
//   };
// });

// test("rendering required component", () => {
//   const { container } = render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );
//   expect(container).toMatchSnapshot();
// });

test("should render App component", () => {
  // Sposób ten pozwala obsłużyć funkcję
  // const mock = jest.fn();

  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const link = screen.getAllByRole("link", { name: /home/i });

  expect(container).toMatchSnapshot();
  expect(link[0]).toBeInTheDocument();

  // expect(container).toMatchSnapshot();
});
