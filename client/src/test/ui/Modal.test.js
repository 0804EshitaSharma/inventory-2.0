import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "../../components/Modal";
/* Referred from https://testing-library.com/docs/queries/about , https://www.youtube.com/watch?v=6wbnwsKrnYU and ChatGPT*/
test("should render modal component properly", () => {
  const heading = "Notification";
  const content = "Invalid Item";
  const closeModal = jest.fn();

  const { getByRole, getByText } = render(
    <Modal heading={heading} content={content} closeModal={closeModal} />
  );
  const modalHeading = getByRole("heading", { level: 3 });
  expect(modalHeading).toHaveTextContent(heading);
  const modalParagraph = getByText("Invalid Item");
  expect(modalParagraph).toBeInTheDocument();
  const modalButton = getByRole("button");
  fireEvent.click(modalButton);
  expect(closeModal).toHaveBeenCalledTimes(1);
  expect(modalButton).toHaveTextContent("Close");
});
