import React, { useState } from "react";
import Button from "./Button.js";
import "./ItemView.css";
import EditItem from "./EditItem.js";

function ItemView({ name, price, description, event }) {
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
          <Button className="modal_button" label="Close" event={closeModal} />
          <Button className="modal_button" label="Edit" event={onEditItem} />
        </div>
        {showEditModal && <EditItem name={name} closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default ItemView;
