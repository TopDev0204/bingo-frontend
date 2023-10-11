import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("renders the number correctly", () => {
    const num = 10;
    render(<Card num={num} />);

    const numElement = screen.getByText(num);
    expect(numElement).toBeInTheDocument();
  });

  it('renders crossed text when the "crossed" prop is true', () => {
    const num = 5;
    render(<Card num={num} crossed={true} />);

    const crossedElement = screen.getByText(num);
    expect(crossedElement).toHaveClass("crossed");
  });

  it("renders default values when props are not provided", () => {
    render(<Card />);

    const defaultNumElement = screen.getByText("Default Number");
    expect(defaultNumElement).toBeInTheDocument();

    const defaultCrossedElement = screen.getByText("Default Number");
    expect(defaultCrossedElement).not.toHaveClass("crossed");
  });
});
