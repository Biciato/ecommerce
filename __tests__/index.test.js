import { render, screen } from "@testing-library/react";
import HomePage from "../app/(routes)/page.tsx";
import "@testing-library/jest-dom";

describe("HomePage", () => {
  it("renders a heading", () => {
    render(<HomePage />);

    const footer = screen.getByRole("footer");

    expect(footer).toBeInTheDocument();
  });
});
