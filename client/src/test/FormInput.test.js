import React from "react";
import { render, fireEvent,screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormInput from "../components/FormInput";

test("renders button with correct label and type", () => {
  const name = "name";
  const label = "Item Name:";
  const type = "text";
  const id = "name";
  const placeholder = "Enter Item Name";
  const { getByRole } = render(
    <FormInput
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      label={label}
    />
  );

  const formInputElement = getByRole("textbox");
  expect(formInputElement).toHaveAttribute("type", type);
});
