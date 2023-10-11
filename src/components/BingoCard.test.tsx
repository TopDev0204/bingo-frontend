import { render } from "@testing-library/react";
import BingoCard from "./BingoCard";

describe("BingoCard", () => {
  it("renders the player name correctly", () => {
    const { getByText } = render(<BingoCard player="John Doe" />);
    expect(getByText("John Doe")).toBeInTheDocument();
  });
});
