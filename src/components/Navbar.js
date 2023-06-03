import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchItems } from "../actions/itemAction.js";
import FilterCard from "./FilterCard.js";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const products = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const onSearchItems = (e) => {
    e.preventDefault();
    const matchedItems = products.filter(
      (item) =>
        item.name.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1
    );
    dispatch(searchItems(matchedItems));
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <span className="navbar_title">Inventory Website</span>
      </Link>
      <FilterCard />
      <div className="navbar_search">
        <input
          className="navbar_search_input"
          type="text"
          onKeyUp={(e) => onSearchItems(e)}
        ></input>
        <svg
          className="navbar_search_icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="navbar_links">
        <div className="navbar_link_1">
          <Link to="/about">
            <span className="navbar_link_heading_2">About</span>
          </Link>
        </div>
        <div className="navbar_link_2">
          <Link to="/">
            <span className="navbar_link_heading_2">Home</span>
          </Link>
        </div>
        <div className="navbar_link_2">
          <Link to="/add">
            <span className="navbar_link_heading_2">Add</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
