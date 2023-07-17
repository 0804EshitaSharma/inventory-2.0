import React from "react";
import "./CustomTable.css";

/* Referred from https://www.w3schools.com/html/html_tables.asp */
function CustomTable({ manufacturedProducts }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Price</th>
          </tr>
          {manufacturedProducts?.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </thead>
      </table>
    </>
  );
}

export default CustomTable;
