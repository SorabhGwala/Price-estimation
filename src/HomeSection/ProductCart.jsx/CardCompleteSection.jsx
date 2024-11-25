import React from "react";
import PriceTracker from "./PriceTracker"; // Import PriceTracker Component
import { mens_kurta } from "./data"; // Import the data
 

const CardCompleteSection = ({item}) => {
    if (!product) return null
  const items = mens_kurta.slice(0, 20).map((product, index) => (
    <PriceTracker key={index} product={product} />
  ));

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold text-center mb-5 text-white">
        Men's Kurtas
      </h1>
      <div className="flex flex-wrap justify-center gap-5">{items}</div>
    </div>
  );
};

export default CardCompleteSection;
