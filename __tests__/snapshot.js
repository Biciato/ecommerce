import { render } from "@testing-library/react";
import HomePage from "../app/(routes)/page.tsx";

it("renders HomePage unchanged", () => {
  const { container } = render(<HomePage />);
  expect(container).toMatchSnapshot();
});
