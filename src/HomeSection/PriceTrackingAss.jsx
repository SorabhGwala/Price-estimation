import React from 'react';
import PriceTracker from './PriceTracker';

// Mock mens_kurta data


const PriceTrackingAss = () => {
  const items = mens_kurta.slice(0, 20).map((product) => (
    <PriceTracker key={product.id} product={product} />
  ));

  return <div>{items}</div>;
};

export default PriceTrackingAss;
