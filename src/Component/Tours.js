import React from "react";
import Carrd from "./Carrd";

const Tours = ({ tours, removeTour }) => {
  return (
      <>
          {/* mapping and spreading tour props */}
      {tours.map((each) => {
        return (
            <Carrd key={each.id} {...each} removeTour={removeTour} />
            // better of as a separate component
          //   <div>
          //     <h1>{name}</h1>
          //     <img src={image} alt="name" />
          //   </div>
        );
      })}
    </>
  );
};

export default Tours;
