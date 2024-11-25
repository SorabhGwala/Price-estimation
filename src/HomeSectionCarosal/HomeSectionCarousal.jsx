import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Cart from '../HomeSection/ProductCart.jsx/Cart';
import { mens_kurta } from '../Data/Men/men_kurta';
// import Cart2 from '../HomeSection/ProductCart.jsx/Cart2';
import ProductCart1 from '../HomeSection/ProductCart.jsx/ProductCard1';

const HomeSectionCarousel = () => {

  const items = mens_kurta.slice(0,20).map((product) => <Cart key={product.id} product={product} />);

  return (
    
<div className="">
  <div className=" p-5">
    <AliceCarousel
      disableButtonsControls
      items={items}
     
      
    />
  </div>
</div>

    
  );
};

export default HomeSectionCarousel;
