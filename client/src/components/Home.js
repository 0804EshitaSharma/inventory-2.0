import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar.js";
import "./Home.css";
import { selectAllItems, getItemsAsync } from "../redux/ItemSlice.js";
import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  const products = useSelector(selectAllItems);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const filteredproducts = useSelector((state) => state.items.filteredItems);
  const [isVisible, setIsVisible] = useState(true);
  /* Learned concept from https://www.youtube.com/watch?v=0W6i5LYKCSI */

  const deleteAllItems = () => {
    // dispatch(deleteItems());
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    dispatch(getItemsAsync());
    setIsLoading(false);
  }, [dispatch]);
  const override = {
    display: "block",
    margin: "0 auto",
  };
  const listItems = products.map((product, index) => (
    <Item
      key={product._id + index}
      id={product._id}
      name={product.name}
      price={product.price}
      description={product.description}
      manufacturer={product.manufacturer}
      url={product.url}
    />
  ));
  const filteredListItems = filteredproducts.map((product, index) => (
    <Item
      key={product._id + index}
      id={product._id}
      name={product.name}
      price={product.price}
      description={product.description}
      manufacturer={product.manufacturer}
      url={product.url}
    />
  ));
  return (
    <>
      <div className="home-container">
        <Navbar />
        {isLoading && (
          <ClipLoader
            color="#369cd6"
            loading={isLoading}
            speedMultiplier={1}
            size={40}
            cssOverride={override}
          />
        )}
        <div className="products_container">
          {filteredproducts.length > 0 ? filteredListItems : listItems}
        </div>
        {/* <div className="button_container">
        {isVisible && <Button label="Delete All" event={deleteAllItems} />}
      </div> */}
      </div>
    </>
  );
}

export default Home;
