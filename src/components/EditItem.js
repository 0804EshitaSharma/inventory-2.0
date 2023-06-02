import React from "react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateItem } from "../actions/itemAction.js";
import { useDispatch } from "react-redux";

function EditItem({ name }) {
  const schema = yup.object({
    price: yup.string().required("Item price is required"),
    description: yup.string().required("Item description is required"),
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
    event.preventDefault();
    console.log({ name: { name }, price: 10, description: "text" });
    dispatch(updateItem({ name: { name }, price: 100 }));
  };

  return (
    <div>
      <form className="item-form-container" onSubmit={formSubmit}>
        <div>
          <FormInput
            name="name"
            id="name"
            type="number"
            placeholder="Item Price"
            label="Enter Price:"
          />
          <FormTextArea
            name="description"
            id="description"
            placeholder="Item Description"
            label="Enter Description:"
            rows="5"
            cols="50"
          />
          <div className="button_container">
            <Button type="submit" label="Submit" />
            <Button type="reset" label="Clear" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditItem;
