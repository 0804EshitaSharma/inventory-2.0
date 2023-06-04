import React from "react";
import "./CustomForm.css";
import { useDispatch } from "react-redux";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { addItem } from "../actions/itemAction.js";
import CustomSelect from "./CustomSelect";
import { useNavigate } from "react-router-dom";

function CustomForm() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
  });
  const dispatch = useDispatch();

  const formSubmit = (event) => {
    dispatch(addItem(event));
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
    { id: 4, text: "Cosmetics" }
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
          errorMessage={errors.itemName?.message}
        />
        <FormInput
          name="price"
          id="price"
          type="number"
          placeholder="Item Price"
          label="Item Price:"
          register={{ ...register("price", { required: true }) }}
          errorMessage={errors.itemPrice?.message}
        />
        <FormTextArea
          name="description"
          id="description"
          placeholder="Item Description"
          label="Item Description:"
          rows="5"
          cols="50"
          register={{ ...register("description", { required: true }) }}
          errorMessage={errors.itemDescription?.message}
        />
        <FormInput
          name="url"
          id="url"
          type="text"
          placeholder="Item Image"
          label="Item Image:"
          register={{ ...register("url", { required: true }) }}
          errorMessage={errors.itemUrl?.message}
        />
        <CustomSelect
          id="category"
          name="category"
          label="Item Category:"
          register={{ ...register("category", { required: true }) }}
          errorMessage={errors.category?.message}
          categories={categories}
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
