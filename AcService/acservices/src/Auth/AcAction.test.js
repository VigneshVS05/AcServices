import { render, screen } from "@testing-library/react";
import AcAction from "./AcAction";

test("Renders Title of the application", () => {
  render(<AcAction />);
  const linkElement = screen.getByText(/CRUD operation in React/i);
  expect(linkElement).toBeInTheDocument();
});