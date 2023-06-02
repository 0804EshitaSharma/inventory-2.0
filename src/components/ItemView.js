import React, { useState } from "react";
import Button from "./Button.js";
import "./ItemView.css";
import EditItem from"./EditItem.js";

function ItemView({ name,price, description,event}) {
  const [showEditModal, setShowEditModal] = useState(false);
  const onEditItem = () => {
    setShowEditModal(true);
    // dispatch(viewItem(name));
  };

  const closeModal = () => {
    setShowEditModal(false);
  };

  return (
    <div>
      <div className="modal_wrapper"></div>
      <div className="modal_content">
        <h3 className="modal_heading">Item Details</h3>
        <ul>
          <li>
            <span>Item Price :${price}</span>
          </li>
          <li>
            <span>Item Description: {description}</span>
          </li>
        </ul>
        <Button className="modal_button" label="Close" event={event} />
        <Button
          className="modal_button"
          label="Edit Price"
          event={onEditItem}
        />
        {showEditModal && <EditItem name={name} />}
      </div>
    </div>
  );
}

export default ItemView