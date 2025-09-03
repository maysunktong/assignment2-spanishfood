import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import SpanishFood from "../components/SpanishFood";

test("Has Spanish Food", () => {
  render(<SpanishFood />);
  const foodData = screen.getByTestId("spanishInfo");
  expect(foodData).toBeInTheDocument();
});

/* Suggestions - Test <Home/> instead */
describe("Home unit test", () => {
  test("render header test id", () => {
    render(<Home />);
    const foodData = screen.getByTestId("spanishInfo");
    expect(foodData).toBeInTheDocument();
  });

  test("render heading h1", () => {
    render(<Home />);
    const mainHeader = screen.getByRole("heading", {
      level: 1,
      name: /spanish food/i,
    });
    expect(mainHeader).toBeInTheDocument();
  });

  test("render logo test id", () => {
    render(<Home />);
    const LogoData = screen.getByTestId("foodLogo");
    expect(LogoData).toBeInTheDocument();
  });
});
