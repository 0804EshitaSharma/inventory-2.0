import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import { useSelector, useDispatch } from "react-redux";
import { viewItems } from "../actions/itemAction.js";
import { deleteItems } from "../actions/itemAction.js";
import Navbar from "./Navbar.js";
import Button from "./Button";
import "./Home.css";

function Home() {
  const products = useSelector((state) => state.items.items);
  const filteredproducts = useSelector((state) => state.items.filteredItems);
  const addedproducts = useSelector((state) => state.items.addedItems);
  const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(true);
    /* Learned concept from https://www.youtube.com/watch?v=0W6i5LYKCSI */

  const fetchData = () => {
    const data =
      '[\n    {\n      "name": "Mackbook Pro",\n      "price": 1500,\n      "description": "MacBook Pro 2023 with mini-LED display.Go longer than ever with up to 18 hours of battery life.It has  8GB of unified memory makes your entire system speedy and responsive.",\n      "url": "https://m.media-amazon.com/images/I/61vhiiYIXxL._AC_SX679_.jpg",\n      "category":"Electronics"\n    },\n    {\n      "name": "Vegetables",\n      "price": 20,\n      "description": "Vegetables are the leaves, stems, roots, or other parts of certain plants that people eat. Vegetables usually come from herbaceous plants. Herbaceous plants have stems that are softer than the woody stems of bushes and trees. Many vegetables grow aboveground",\n      "url": "https://th.bing.com/th/id/OIP.M3ohwnP9mPl7cwNPy5cJcwHaE8?pid=ImgDet&rs=1",\n      "category":"Groceries"\n    },\n    {\n      "name": "Airpods Pro",\n      "price": 250,\n      "description": "These Airpods have Active Noise Cancellation blocks outside noise, so you can immerse yourself in music and Transparency mode for hearing and interacting with the world around you",\n      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiHnyjd-aCFUP_m8ZvsTE52LjS4tirQPQUA&usqp=CAU",\n      "category":"Electronics"\n    },\n    {\n      "name": "Calculator",\n      "price":10,\n      "description": "This Calculator comes wth attached hard cover for extra protection and durability and with 120 steps check function",\n      "url": "https://m.media-amazon.com/images/I/616Kmv5LvdL._AC_UL640_FMwebp_QL65_.jpg",\n      "category":"Electronics"\n    },\n    {\n      "name": "Maybelline Mascara",\n      "price": 40,\n      "description": "It is Easy to apply mascara that provides curled and volumized lashes",\n      "url": "https://m.media-amazon.com/images/I/51pQmQhAm0L._AC_UL800_FMwebp_QL65_.jpg",\n      "category":"Cosmetics"\n    }\n ,\n    {\n      "name": "Fruits",\n      "price": 20,\n      "description": "Fruit provides many essential nutrients that often are underconsumed, including vitamins C and A and folate, as well as potassium and dietary fiber. Eating more fiber-rich, low-calorie fresh fruit in place of higher-calorie foods can help decrease your overall calorie intake",\n      "url": "https://beef2live.com/images/668/author/1764/2021/4/images/ranking_countries_produce_fresh_fruit_1_637540433636851364_1440.jpg",\n      "category":"Groceries"\n    }\n  ]';
    dispatch(
      viewItems(JSON.parse(data).concat(addedproducts))
    );
  };

  const deleteAllItems = () => {
    dispatch(deleteItems());
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listItems = products.map((product) => (
    <Item
      key={product.name}
      name={product.name}
      price={product.price}
      description={product.description}
      url={product.url}
    />
  ));
  const filteredListItems = filteredproducts.map((product) => (
    <Item
      key={product.name}
      name={product.name}
      price={product.price}
      description={product.description}
      url={product.url}
    />
  ));
  return (
    <div className="home-container">
      <Navbar />
      <div className="products_container">
        {filteredproducts.length > 0 ? filteredListItems : listItems}
      </div>
      <div className="button_container">
       {isVisible &&  <Button label="Delete All" event={deleteAllItems} />}
      </div>
    </div>
  );
}

export default Home;
