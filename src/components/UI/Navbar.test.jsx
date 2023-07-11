import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders Navbar", () => {
  render(<Navbar />);
  const myElement = screen.getByText(/Home/i);
  expect(myElement).toBeInTheDocument();
});
