import React from "react";

function CustomList({ heading, items }) {
  const list = items.map((item) => (
    <li key={item.id}>
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
