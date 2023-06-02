import React from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import Navbar from "./Navbar.js";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addItem } from "../actions/itemAction.js";

function Form() {
  const schema = yup.object({
    name: yup.string().required("Item name is required"),
    price: yup.string().required("Item price is required"),
    description: yup.string().required("Item description is required"),
    url: yup.string().required("Item image is required"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  // Handle form submission
  const formSubmit = (event) => {
    console.log(event);
    dispatch(addItem(event));
  };

  // // Handle form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // // Handle form input changes
  // const clearForm = (event) => {
  //   setFormData(() => ({
  //     itemName: "",
  //     itemPrice: "",
  //     itemDescription: "",
  //     itemImage: "",
  //     itemCategory: "",
  //   }));
  // };

  const addItem = () => {};

  return (
    <div>
      <Navbar />
      <form className="item-form-container" onSubmit={handleSubmit(formSubmit)}>
        <div>
          <FormInput
            name="name"
            id="name"
            type="text"
            placeholder="Item Name"
            label="Item Name:"
            register={{ ...register("name") }}
            errorMessage={errors.itemName?.message}
          />
          <FormInput
            name="price"
            id="price"
            type="number"
            placeholder="Item Price"
            label="Item Price:"
            register={{ ...register("price") }}
            errorMessage={errors.itemPrice?.message}
          />
          <FormTextArea
            name="description"
            id="description"
            placeholder="Item Description"
            label="Item Description:"
            rows="5"
            cols="50"
            register={{ ...register("description") }}
            errorMessage={errors.itemDescription?.message}
          />
          <FormInput
            name="url"
            id="url"
            type="file"
            placeholder="Item Image"
            label="Item Image:"
            register={{ ...register("url") }}
            errorMessage={errors.itemUrl?.message}
          />
          <div className="select_container">
            <label className="input_field_label" htmlFor="itemcategory">
              Item Category:
            </label>
            <select id="itemcategory" name="category" required>
              <option value="Category">Choose a Category----</option>
              <option value="Electronics">Electronics</option>
              <option value="Groceries"> Groceries</option>
              <option value="Cosmetics">Cosmetics</option>
            </select>
          </div>
          <div className="button_container">
            <Button type="submit" label="Add" />
            <Button type="reset" label="Clear" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
