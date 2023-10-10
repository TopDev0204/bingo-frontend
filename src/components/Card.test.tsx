import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";

test("Card renders correctly", () => {
  const num = 0;
  const label = "Dropdown";
  const list = ["option1", "option2", "option3"];
  const onChange = jest.fn();

  render(
    <Card
      num={num}
      // label={label}
      // list={list}
      // onChange={onChange}
    />
  );

  expect(screen.getByLabelText("Dropdown:")).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText("Dropdown:"), {
    target: { num: 1 },
  });
  expect(onChange).toHaveBeenCalledTimes(1);
});
