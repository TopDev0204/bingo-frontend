import { render } from "@testing-library/react";
import Popup from "./Popup";

describe("Popup", () => {
  it("renders correctly with num and letter props", () => {
    const num = 123;
    const letter = "A";

    const { getByText } = render(<Popup num={num} letter={letter} />);

    expect(getByText(`${letter} ${num}`)).toBeInTheDocument();
  });
});
