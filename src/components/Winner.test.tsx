import { render } from "@testing-library/react";
import Winner from "./Winner";

test("renders BINGO! text", () => {
  const { getByText } = render(<Winner />);

  const bingoElement = getByText(/BINGO!/i);

  expect(bingoElement).toBeInTheDocument();
});
