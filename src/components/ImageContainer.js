import React from "react";
import "./ImageContainer.css";
function ImageContainer({ imageUrl, style }) {
  return (
    <div className="image_view">
      <img style={style} src={imageUrl}></img>
    </div>
  );
}

export default ImageContainer;
