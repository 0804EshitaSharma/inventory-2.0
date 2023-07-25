import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "../../components/Button";

/* Referred from https://testing-library.com/docs/queries/about , https://www.youtube.com/watch?v=6wbnwsKrnYU and ChatGPT*/

test("should render button component properly", () => {
  const type = "submit";
  const label = "Button";
  const onClick = jest.fn();

  const { getByText } = render(
    <Button type={type} label={label} event={onClick} />
  );

  const button = getByText(label);
  expect(button).toHaveTextContent(label);
  expect(button).toHaveAttribute("type", type);
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
