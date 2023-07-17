import React from "react";

function CustomList({ heading, items }) {
  /* Learned From https://react.dev/learn */
  const list = items.map((item,index) => (
    <li key={index}>
     {item.text}
    </li>
  ));
  return (
    <div>
      <h3>{heading}</h3>
      <ul>{list}</ul>
    </div>
  );
}

export default CustomList;
