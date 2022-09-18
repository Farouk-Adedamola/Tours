import React, { useState } from "react";
import "./Carrd.css";
import "animate.css";

const Carrd = ({ id, image, name, info, price, removeTour }) => {
  // state to set conditional rendering
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="data-container animate__animated animate__flash">
      <img src={image} alt="" className="image" />
      <div className="name-price">
        <h4 className="name">{name}</h4>
        <h4 className="price"># {price}</h4>
      </div>
      <div className="footer-btn">
        {/* props info conditional rendering */}
        <p className="info">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => setReadMore(!readMore)}
            className="readmore-btn"
          >
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button type="button" className="button" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </div>
    </div>
  );
};

export default Carrd;
