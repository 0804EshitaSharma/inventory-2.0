import React from "react";
import "./Modal.css";
import Button from "./Button.js";

function Modal({heading, content, closeModal }) {
  return (
    /* Learned From https://www.youtube.com/watch?v=GMaQPv5ZsR0 */
    <div>
      <div className="modal_wrapper"></div>
      <div className="modal_content">
        <h3 className="modal_heading">{heading}</h3>
        <p>{content}</p>
        <div className="button_container">
          <Button className="modal_button" label="Close" event={closeModal} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
