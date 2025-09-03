import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import SpanishFood from "../components/SpanishFood";

test("Has Spanish Food", () => {
  render(<SpanishFood />);
  const foodData = screen.getByTestId("spanishInfo");
  expect(foodData).toBeInTheDocument();
});
