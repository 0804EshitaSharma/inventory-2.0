import React from 'react'
import "./CustomParagraph.css";
function CustomParagraph({text}) {
  return (
    <div>
      <p>
       {text}
      </p>
    </div>
  );
}

export default CustomParagraph