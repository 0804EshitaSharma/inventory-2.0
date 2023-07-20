import React from "react";
import { render, screen, userEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormInput from "./FormInput";

test("FormInput", async () => {
  const id = "name";
  const name = "name";
  const placeholder = "Enter Name";
  const type = "text";
  const label = "Name";
  const register = jest.fn();

  const { getByLabelText, getByPlaceholderTextrender } = render(
    <FormInput
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      label={label}
      register={register}
    />
  );

  const formElement = screen.getByPlaceholderText(placeholder);
  expect(formElement).toBeInTheDocument();
  expect(formElement).toHaveAttribute("type", type);
  expect(formElement).toHaveAttribute("id", id);
  expect(formElement).toHaveAttribute("name", name);
  expect(formElement).toHaveAttribute("type", type);
  expect(formElement).toHaveAttribute("placeholder", placeholder);
});
