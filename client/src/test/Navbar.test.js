import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const middlewares = [];
const mockStore = configureStore(middlewares);

test("should render Navbar component properly", () => {
  const initialState = {
    items: { items: [] },
  };
  const store = mockStore(initialState);
  const MockNavbar = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
  };

  render(<MockNavbar />);
  const homeLink = screen.getByText("Home");
  expect(homeLink).toBeInTheDocument();
  fireEvent.click(homeLink);
  expect(window.location.pathname).toBe("/");
  const addLink = screen.getByText("Add");
  expect(addLink).toBeInTheDocument();
  fireEvent.click(addLink);
  expect(window.location.pathname).toBe("/add");
  const aboutLink = screen.getByText("About");
  expect(aboutLink).toBeInTheDocument();
  fireEvent.click(aboutLink);
  expect(window.location.pathname).toBe("/about");
  const searchBar = screen.getByRole("textbox");
  expect(searchBar).toBeInTheDocument();
  fireEvent.change(searchBar, {
    target: { value: "Vegetables" },
  });
  expect(searchBar).toHaveValue("Vegetables");
});
