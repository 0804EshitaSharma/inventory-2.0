import React from 'react'
import Button from "./Button.js";
import "./ItemView.css";
function ItemView({ price, description,event}) {
  return (
    <div>
      <div className="modal_wrapper"></div>
      <div className="modal_content">
        <h3 className='modal_heading'>Item Details</h3>
        <ul>
          <li>
            <span>Item Price :${price}</span>
          </li>
          <li>
            <span>Item Description: {description}</span>
          </li>
        </ul>
        <Button className='modal_button' label="Add to Cart" event={event}/>
      </div>
    </div>
  );
}

export default ItemView