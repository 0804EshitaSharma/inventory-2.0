import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomParagraph from "../components/CustomParagraph";

test("CustomParagraph1", () => {
  const text = "Paragraph";

  const { getByText } = render(<CustomParagraph text={text} />);

  const customParagraphElement = getByText(text);
  expect(customParagraphElement).toBeInTheDocument();
});
