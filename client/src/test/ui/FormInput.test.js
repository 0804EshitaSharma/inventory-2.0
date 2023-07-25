import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormInput from "../../components/FormInput";
/* Referred from https://testing-library.com/docs/queries/about , https://www.youtube.com/watch?v=6wbnwsKrnYU and ChatGPT*/
test("should render form input component properly", () => {
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

  const formInput = getByRole("textbox");
  expect(formInput).toHaveAttribute("type", type);
  expect(formInput).toHaveAttribute("autoComplete", "off");
  fireEvent.change(formInput, { target: { value: "Item 1" } });
  expect(formInput).toHaveValue("Item 1");
});
