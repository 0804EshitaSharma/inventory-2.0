import React from "react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateItem } from "../actions/itemAction.js";
import { useDispatch } from "react-redux";

function EditItem({ name, closeModal }) {
  const schema = yup.object({
    price: yup.string(),
    description: yup.string(),
  });
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const formSubmit = (event) => {
    console.log(event);
    dispatch(updateItem({name:name , updatedData:event}));
    closeModal();
  };

  const clearForm = (event) => {
    event.preventDefault();
    closeModal();
  };

  return (
    <div>
      <form className="item-form-container">
        <div>
          <FormInput
            name="price"
            id="price"
            type="number"
            placeholder="Item Price"
            label="Enter Price:"
            register={{ ...register("price") }}
          />
          <FormTextArea
            name="description"
            id="description"
            placeholder="Item Description"
            label="Enter Description:"
            rows="5"
            cols="50"
            register={{ ...register("description") }}
          />
          <div className="button_container">
            <Button
              type="submit"
              label="Submit"
              event={handleSubmit(formSubmit)}
            />
            <Button type="reset" label="Clear" event={clearForm} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditItem;
