import React from "react";
import "./CustomForm.css";
import { useDispatch } from "react-redux";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addItem } from "../actions/itemAction.js";
import CustomSelect from "./CustomSelect";
import { useNavigate } from "react-router-dom";

function CustomForm() {
  const schema = yup.object({
    name: yup.string().required("Item name is required"),
    price: yup.string().required("Item price is required"),
    description: yup.string().required("Item description is required"),
    url: yup.string().required("Item image is required"),
  });
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
          type="text"
          placeholder="Item Image"
          label="Item Image:"
          register={{ ...register("url") }}
          errorMessage={errors.itemUrl?.message}
        />
        <CustomSelect
          id="category"
          name="category"
          label="Item Category:"
          register={{ ...register("category") }}
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
