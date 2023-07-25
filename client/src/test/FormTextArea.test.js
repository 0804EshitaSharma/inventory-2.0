import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormTextArea from "../../src/components/FormTextArea";
/* Referred from https://testing-library.com/docs/queries/about , https://www.youtube.com/watch?v=6wbnwsKrnYU and ChatGPT*/
test("should render form text area component properly", () => {
  const id = "text-area";
  const name = "text-area";
  const placeholder = "Enter Description";
  const label = "Enter Description";
  const rows = "10";
  const cols = "20";
  const { getByRole } = render(
    <FormTextArea
      id={id}
      name={name}
      placeholder={placeholder}
      label={label}
      rows={rows}
      cols={cols}
    />
  );

  const customFormTextArea = getByRole("textbox");
  expect(customFormTextArea).toBeInTheDocument();
  expect(customFormTextArea).toHaveAttribute("rows", rows);
  expect(customFormTextArea).toHaveAttribute("cols", cols);
  fireEvent.change(customFormTextArea, {
    target: { value: "Item Description" },
  });
  expect(customFormTextArea).toHaveValue("Item Description");
});
