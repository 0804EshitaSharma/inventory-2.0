import React from 'react'
import "./CustomParagraph.css";

function CustomParagraph({text}) {
  return (
    <div>
      <p className="paragraph_text">
       {text}
      </p>
    </div>
  );
}

export default CustomParagraph