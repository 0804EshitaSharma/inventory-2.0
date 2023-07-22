import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormTextArea from "../../src/components/FormTextArea";

test("FormTextArea", () => {
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

  const customFormTextAreaElement = getByRole("textbox");
  expect(customFormTextAreaElement).toBeInTheDocument();
  expect(customFormTextAreaElement).toHaveAttribute("rows", rows);
});
