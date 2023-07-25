import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import configureStore from "redux-mock-store";
import CustomForm from "../components/CustomForm";
const middlewares = [];
const mockStore = configureStore(middlewares);
/* Referred from https://testing-library.com/docs/queries/about , https://www.youtube.com/watch?v=6wbnwsKrnYU and ChatGPT*/
describe("should render form component properly", () => {
  var store;

  beforeEach(() => {
    store = mockStore({});
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CustomForm />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render all input fields properly", () => {
    expect(screen.getByLabelText(/Item Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Item Category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Item Manufacturer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Item Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Item Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Item Image/i)).toBeInTheDocument();
  });

  it("should clear all the input fields when clear button is clicked", () => {
    fireEvent.change(screen.getByLabelText(/Item Name/i), {
      target: { value: "Item" },
    });
    fireEvent.change(screen.getByLabelText(/Item Price/i), {
      target: { value: "20" },
    });
    fireEvent.change(screen.getByLabelText(/Item Manufacturer/i), {
      target: { value: "Manufacturer" },
    });
    fireEvent.change(screen.getByLabelText(/Item Description/i), {
      target: { value: "Description" },
    });
    fireEvent.change(screen.getByLabelText(/Item Image/i), {
      target: { value: "image" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Clear/i }));
    expect(screen.getByLabelText(/Item Name/i).value).toBe("");
    expect(screen.getByLabelText(/Item Name/i).value).toBe("");
    expect(screen.getByLabelText(/Item Price/i).value).toBe("");
    expect(screen.getByLabelText(/Item Description/i).value).toBe("");
    expect(screen.getByLabelText(/Item Image/i).value).toBe("");
    expect(screen.getByLabelText(/Item Category/i).value).toBe(
      "Choose a Category----"
    );
    expect(screen.getByLabelText(/Item Manufacturer/i).value).toBe("");
  });
});
