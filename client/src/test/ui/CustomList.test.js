import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomList from "../../components/CustomList";
/* Referred from https://testing-library.com/docs/queries/about , https://www.youtube.com/watch?v=6wbnwsKrnYU and ChatGPT*/
test("should render list component properly", () => {
  const heading = "Features";
  const items = [
    { id: 1, text: "React" },
    { id: 2, text: "MongoDB" },
  ];
  const { getByText, getAllByRole } = render(
    <CustomList heading={heading} items={items} />
  );
  const customList = getByText(heading);
  expect(customList).toBeInTheDocument();
  const listItems = getAllByRole("listitem");
  expect(listItems.length).toBe(items.length);
});
