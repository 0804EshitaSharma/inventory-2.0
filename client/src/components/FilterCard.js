import React, { useState } from "react";
import "./FilterCard.css";
import { useSelector, useDispatch } from "react-redux";
import { filterItemsAsync } from "../redux/ItemSlice";
import Modal from "./Modal";
import CustomSelect from "./CustomSelect";
import { useNavigate } from "react-router-dom";

function FilterCard() {
  const [showModal, setShowModal] = useState(false);
  const products = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const content = " No items found for the selected category! ";
  const heading = "Notification";
  const categories = [
    { id: 1, text: "Choose a Category----" },
    { id: 2, text: "Electronics" },
    { id: 3, text: "Groceries" },
    { id: 4, text: "Cosmetics" },
  ];
  const filteredItems = (e) => {
    if (e.target.value === "Choose a Category----") {
      dispatch(filterItemsAsync());
      navigate("/");
    } else {
      dispatch(filterItemsAsync(e.target.value));
      navigate("/");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div className="filter_card" onChange={(e) => filteredItems(e)}>
        <CustomSelect
          id="category"
          name="category"
          categories={categories}
          event={(e) => filteredItems(e)}
        />
      </div>
      {showModal && (
        <Modal content={content} heading={heading} closeModal={closeModal} />
      )}
    </div>
  );
}

export default FilterCard;
