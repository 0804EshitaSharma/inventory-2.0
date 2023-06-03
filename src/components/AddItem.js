import React from "react";
import "./AddItem.css";
import Navbar from "./Navbar.js";
import CustomForm from "./CustomForm";

function AddItem() {
  


  return (
    <div>
      <Navbar />
      {/* <form className="item-form-container" onSubmit={handleSubmit(formSubmit)}>
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
          />
          <div className="button_container">
            <Button type="submit" label="Add" />
            <Button type="reset" label="Clear" event={clearForm} />
          </div>
        </div>
      </form> */}
      <CustomForm/>
    </div>
  );
}

export default AddItem;
