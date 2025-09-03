import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("If header has logo and title", () => {
  test("If header has a title", () => {
    const mockData = "Best Food";
    render(<Header title={mockData} />);

    const headerTitle = screen.getByRole("heading", { level: 1 });
    expect(headerTitle).toBeInTheDocument();
  });
});
