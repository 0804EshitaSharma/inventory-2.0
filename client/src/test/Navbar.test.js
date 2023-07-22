import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
// Create a mock store
const middlewares = [];
const mockStore = configureStore(middlewares);

test("renders button with correct label and type", () => {
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

   const aboutLink = screen.getByText("About");
   expect(aboutLink).toBeInTheDocument();

   const addLink = screen.getByText("Add");
   expect(addLink).toBeInTheDocument();
});
test("renders button with correct label and type", () => {
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

  const aboutLink = screen.getByText("About");
  expect(aboutLink).toBeInTheDocument();

  const addLink = screen.getByText("Add");
  expect(addLink).toBeInTheDocument();
});