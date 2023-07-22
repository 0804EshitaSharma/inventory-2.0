import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomList from "../components/CustomList";

test("CustomList", () => {
  const heading = "Features";
  const items = [
    { id: 1, text: "React" },
    { id: 2, text: "MongoDB" },
  ];
  const { getByText, getAllByRole } = render(
    <CustomList heading={heading} items={items} />
  );
  const customListElement = getByText(heading);
  expect(customListElement).toBeInTheDocument();
  const listItems = getAllByRole("listitem");
  expect(listItems.length).toBe(items.length);
});
