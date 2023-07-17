import React, { useState } from "react";
import Button from "./Button.js";
import "./ItemView.css";
import EditItem from "./EditItem.js";
import {Link} from 'react-router-dom';

function ItemView({ id, price, description, manufacturer, event }) {
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

          <li>
            <span className="manufacturer_details">
              <strong>Item Manufacturer:</strong> {manufacturer}
              <Link to={`/manufacturer/${manufacturer}`}>
                <div className="manufacturer_account">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </Link>
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
