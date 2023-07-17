import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getItemsByManufacturerAsync,
  selectedAllItems,
} from "../redux/ItemSlice.js";
import "./Manufacturer.css";
import CustomTable from "./CustomTable.js";
import Navbar from "./Navbar.js";
function Manufacturer() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const manufacturedProducts = useSelector(selectedAllItems);
  useEffect(() => {
    dispatch(getItemsByManufacturerAsync(name));
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="items_container">
        <h2 className="subheading">List of Items Manufactured by {name}:</h2>
        <div>
          {manufacturedProducts.length > 0 && (
            <CustomTable manufacturedProducts={manufacturedProducts} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Manufacturer;
