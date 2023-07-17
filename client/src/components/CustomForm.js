import React from "react";
import "./CustomForm.css";
import { useDispatch } from "react-redux";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import Button from "./Button";
import { useForm } from "react-hook-form";
import CustomSelect from "./CustomSelect";
import { useNavigate } from "react-router-dom";
import { addItemAsync } from "../redux/ItemSlice.js";
import { v4 as uuidv4 } from "uuid";

function CustomForm() {
  const navigate = useNavigate();
  /* Learned from https://www.youtube.com/watch?v=K4r6nw6aeg4 */
  const { handleSubmit, reset, register } = useForm({});
  const dispatch = useDispatch();

  const formSubmit = (event) => {
    event = {
      ...event
    };
    dispatch(addItemAsync(event));
    reset();
    navigate("/");
  };

  const clearForm = () => {
    reset();
  };

  const categories = [
    { id: 1, text: "Choose a Category----" },
    { id: 2, text: "Electronics" },
    { id: 3, text: "Groceries" },
    { id: 4, text: "Cosmetics" },
  ];
  return (
    <form className="item-form-container">
      <div>
        <FormInput
          name="name"
          id="name"
          type="text"
          placeholder="Item Name"
          label="Item Name:"
          register={{ ...register("name", { required: true }) }}
        />
        <FormInput
          name="price"
          id="price"
          type="number"
          placeholder="Item Price"
          label="Item Price:"
          register={{ ...register("price", { required: true }) }}
        />
        <FormTextArea
          name="description"
          id="description"
          placeholder="Item Description"
          label="Item Description:"
          rows="5"
          cols="50"
          register={{ ...register("description", { required: true }) }}
        />
        <FormInput
          name="url"
          id="url"
          type="text"
          placeholder="Item Image"
          label="Item Image:"
          register={{ ...register("url", { required: true }) }}
        />
        <CustomSelect
          id="category"
          name="category"
          label="Item Category:"
          register={{ ...register("category", { required: true }) }}
          categories={categories}
        />
        <FormInput
          id="manufacturer"
          name="manufacturer"
          type="text"
          placeholder="Item Manufacturer"
          label="Item Manufacturer:"
          register={{ ...register("manufacturer", { required: true }) }}
        />
        <div className="button_container">
          <Button type="submit" label="Add" event={handleSubmit(formSubmit)} />
          <Button type="reset" label="Clear" event={clearForm} />
        </div>
      </div>
    </form>
  );
}

export default CustomForm;
