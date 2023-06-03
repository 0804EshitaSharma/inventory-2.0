import React, { useState } from "react";
import "./FilterCard.css";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "../actions/itemAction.js";
import ItemView from "./ItemView";

function FilterCard() {
  const [showModal, setShowModal] = useState(false);
  const products = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const filteredItems = (e) => {
    const matchedItems = products.filter(
      (item) => item.category.toUpperCase() === e.target.value.toUpperCase()
    );
    console.log(matchedItems);
    if (matchedItems.length === 0) {
      setShowModal(true);
    } else {
      dispatch(filterItems(matchedItems));
    }
  };
  return (
    <div>
      <div className="filter_card" onChange={(e) => filteredItems(e)}>
        <select id="itemcategory" name="category" required>
          <option value="Category">Choose a Category----</option>
          <option value="Electronics">Electronics</option>
          <option value="Groceries"> Groceries</option>
          <option value="Cosmetics">Cosmetics</option>
        </select>
      </div>
      {showModal && <ItemView/>}
    </div>
  );
}

export default FilterCard;
