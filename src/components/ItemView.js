import React, { useState } from "react";
import Button from "./Button.js";
import "./ItemView.css";
import EditItem from "./EditItem.js";

function ItemView({ id, price, description, event }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const onEditItem = () => {
    setShowEditModal(true);
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
            <span>
              <strong>Item Price :</strong>${price}
            </span>
          </li>
          <li>
            <span>
              <strong>Item Description:</strong> {description}
            </span>
          </li>
        </ul>
        <div className="button_container">
          <Button className="modal_button" label="Close" event={event} />
          <Button className="modal_button" label="Edit" event={onEditItem} />
        </div>
        {showEditModal && <EditItem id={id} closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default ItemView;
