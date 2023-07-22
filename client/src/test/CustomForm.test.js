import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import configureStore from "redux-mock-store"; //ES6 modules
import CustomForm from "../components/CustomForm";
const middlewares = [];
const mockStore = configureStore(middlewares);
describe("CustomForm", () => {
  var store 
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
  
  it("renders all input fields correctly", () => {
    expect(screen.getByLabelText(/Item Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Item Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Item Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Item Image/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Item Category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Item Manufacturer/i)).toBeInTheDocument();
  });
  it("clears the form when the 'Clear' button is clicked", () => {
   
    fireEvent.change(screen.getByLabelText(/Item Name/i), {
      target: { value: "Test Item" },
    });
    fireEvent.change(screen.getByLabelText(/Item Price/i), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByLabelText(/Item Description/i), {
      target: { value: "Test description" },
    });
    fireEvent.change(screen.getByLabelText(/Item Image/i), {
      target: { value: "test-image.jpg" },
    });
    fireEvent.change(screen.getByLabelText(/Item Manufacturer/i), {
      target: { value: "Test Manufacturer" },
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
