import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "../components/Button";

test("renders button with correct label and type", () => {
  const type = "submit";
  const label = "Click Me";
  const onClick = jest.fn();

  const { getByText } = render(
    <Button type={type} label={label} event={onClick} />
  );

  const buttonElement = getByText(label);
  expect(buttonElement).toHaveTextContent(label);
  expect(buttonElement).toHaveAttribute("type", type);
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
