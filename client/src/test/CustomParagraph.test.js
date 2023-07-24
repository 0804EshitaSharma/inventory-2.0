import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomParagraph from "../components/CustomParagraph";

test("should render paragraph component properly", () => {
  const text = "Paragraph Text";

  const { getByText } = render(<CustomParagraph text={text} />);

  const customParagraph = getByText(text);
  expect(customParagraph).toBeInTheDocument();
});
