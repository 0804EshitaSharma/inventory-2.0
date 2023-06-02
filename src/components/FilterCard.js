import React from "react";
import "./FilterCard.css";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "../actions/itemAction.js";

function FilterCard() {
  const products = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const filteredItems = (e) => {
    const matchedItems = products.filter(
      (item) => item.category.toUpperCase() === e.target.value.toUpperCase()
    );
    console.log(matchedItems);

    dispatch(filterItems(matchedItems));
  };
  return (
    <div className="filter_card" onChange={(e) => filteredItems(e)}>
      <select id="itemcategory" name="category" required>
        <option value="Category">Choose a Category----</option>
        <option value="Electronics">Electronics</option>
        <option value="Groceries"> Groceries</option>
        <option value="Cosmetics">Cosmetics</option>
      </select>
    </div>
  );
}

export default FilterCard;
