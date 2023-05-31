import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../actions/itemAction.js";
import { viewItem } from "../actions/itemAction.js";
function Item({ name, price, description, url }) {
  const dispatch = useDispatch();

  const onDeleteItem = () => {
    dispatch(deleteItem(name));
  };
  const onViewItem = () => {
    dispatch(viewItem(name));
  };

  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{price}</li>
        <li>{description}</li>
        <li>
          <img src={url}></img>
        </li>
      </ul>
      <Button label="Delete" event={onDeleteItem} />
      <Button label="View" event={onViewItem} />
    </div>
  );
}

export default Item;
