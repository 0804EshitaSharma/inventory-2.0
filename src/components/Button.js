import React from 'react'
import "./Button.css";
function Button({type,label,event}) {
  return (
    <div>
      <button className="custom_button" type={type} onClick={event}>
        {label}
      </button>
    </div>
  );
}

export default Button