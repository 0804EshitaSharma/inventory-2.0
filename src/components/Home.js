import React from "react";
import Form from "./Form.js";
import Item from "./Item.js";
import Navbar from "./Navbar.jsx";
import {useSelector} from 'react-redux';

function Home() {
  const products = useSelector((state)=> state.items.items);
  console.log(products);
 
  const listItems = products.map(product =>
     <Item name={product.name} price={product.price} description={product.description} url={product.url}/>   
  );
  return (
    <div className="home-container">
      <Navbar />
      {/* <Form/> */}
      {listItems}
    </div>
  );
}

export default Home;
