import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import ItemView from "./ItemView.js";
import ImageContainer from "./ImageContainer";
import { deleteItemAsync } from "../redux/ItemSlice.js";
import "./Item.css";

function Item({ id, name, url, price, description }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const onDeleteItem = () => {
    dispatch(deleteItemAsync(id));
  };
  const onViewItem = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const customStyle = {
    width: "100%",
    marginLeft: "5rem",
    marginRight: "auto",
    objectFit: "contain",
  };

  return (
    <div>
      {!showModal && (
        <div className="item_container">
          <ul>
            <li>
              <ImageContainer imageUrl={url} style={customStyle} />
            </li>
            <li className="item_name">{name}</li>
          </ul>
          <div className="button_view">
            <Button label="Delete" event={onDeleteItem} />
            <Button label="View" event={onViewItem} />
          </div>
        </div>
      )}
      {showModal && (
        <ItemView
          name={name}
          price={price}
          description={description}
          event={closeModal}
        />
      )}
    </div>
  );
}

export default Item;
