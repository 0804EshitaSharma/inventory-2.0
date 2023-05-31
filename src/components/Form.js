import React, { useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar.js";
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    url: "",

    // Add additional form fields as needed
  });
  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    dispatch(
      addItem({
        item: { formData },
      })
    );
  };

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form input changes
  const clearForm = (event) => {
    setFormData(() => ({
      itemName: "",
      itemPrice: "",
      itemDescription: "",
      itemImage: "",
      itemCategory: "",
    }));
  };

  const addItem = () => {};

  return (
    <div>
      <Navbar />
      <form className="item-form-container" onSubmit={handleSubmit}>
        <div className="item-form">
          <label>Item Name:</label>
          <input
            name="name"
            value={formData.itemName}
            onChange={handleChange}
            type="text"
            required
            autoComplete="off"
          ></input>
          <label>Item Price:</label>
          <input
            name="price"
            value={formData.itemPrice}
            onChange={handleChange}
            type="number"
            required
          ></input>
          <label>Item Description:</label>
          <textarea
            name="description"
            value={formData.itemDescription}
            onChange={handleChange}
            required
          ></textarea>
          <label>Item Image:</label>
          <input
            name="url"
            value={formData.itemImage}
            onChange={handleChange}
            type="file"
            required
          ></input>
          <label>Item Category:</label>
          {/* <select
          name="itemCategory"
          value={formData.itemCategory}
          onChange={handleChange}
          required
        >
          <option>Choose one----</option>
          <option>Groceries</option>
          <option>Electronics</option>
          <option>Apparel</option>
          <option>Furniture</option>
        </select> */}
          <button type="submit" onClick={addItem}>
            Add
          </button>
          <button type="reset" onClick={clearForm}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
