import React from "react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateItemAsync } from "../redux/ItemSlice";

function EditItem({ id, closeModal }) {
  const { handleSubmit, register } = useForm({});
  const dispatch = useDispatch();

  const formSubmit = (event) => {
    dispatch(updateItemAsync({ id: id, data: event }));
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
