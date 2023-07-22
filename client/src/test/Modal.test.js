import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "../components/Modal";

test("renders button with correct label and type", () => {
  const heading = "Error";
  const content = "Notification";
  const closeModal = jest.fn();

  const { getByRole, getByText } = render(
    <Modal heading={heading} content={content} closeModal={closeModal} />
  );
  const modalHeadingElement = getByRole("heading", { level: 3 });
  expect(modalHeadingElement).toHaveTextContent(heading);
  const modalParagraphElement = getByText("Notification");
  expect(modalParagraphElement).toBeInTheDocument();
  const modalButtonElement = getByRole("button");
  fireEvent.click(modalButtonElement);
  expect(closeModal).toHaveBeenCalledTimes(1);
});
