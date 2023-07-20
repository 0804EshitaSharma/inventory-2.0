import React from "react";
import { render, fireEvent, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormTextArea from "./FormTextArea";

test("FormTextArea", () => {
  const text = "FormTextArea";
  const id = "text-area";
  const name = "text-area";
  const placeholder = "Enter Description";
  const label = "Enter Description";
  const rows = "10";
  const cols = "20";
  const register = jest.fn();

  const { getByRole } = render(
    <FormTextArea
      text={text}
      id={id}
      name={name}
      placeholder={placeholder}
      label={label}
      rows={rows}
      cols={cols}
      register={register}
    />
  );

  const customFormTextAreaElement = getByRole("textbox");
  expect(customFormTextAreaElement).toBeInTheDocument();
  expect(customFormTextAreaElement).toHaveAttribute("rows", rows);
});
