import './App.css';
import Footer from './HomeSection/Footer';
import Home from './HomeSection/Home';
import Login from './HomeSection/Login';
import PriceTracker from './HomeSection/PriceTracker';
import About from './HomeSection/ProductCart.jsx/About';
import CardComplete from './HomeSection/ProductCart.jsx/CardComplete';
import ProductCard1 from './HomeSection/ProductCart.jsx/ProductCard1';
// import Card3 from './HomeSection/ProductCart.jsx/ProductCard1';
import Cart from './HomeSection/ProductCart.jsx/Cart';
// import Cart21 from './HomeSection/ProductCart.jsx/Cart21';
import Product from './HomeSection/ProductCart.jsx/Product';
import HomeSectionCarousal from './HomeSectionCarosal/HomeSectionCarousal';

import Nav2bar from './Nav2bar';

function App( product) {
  return (
    <div className="App">
   
    <Nav2bar/>
    <Home/>
    {/* <PriceTracker productId="123456" /> */}
    <ProductCard1/>
        <CardComplete product={product} />;
    <About/>
    
    
    {/* <Cart21/> */}
    {/* <Cart/> */}
    {/* <Login/> */}
    {/* <Product/> */}
{/* {/*     */}
{/* <HomeSectionCarousal/> */}
     <Footer/> 
     
     
      


    </div>
  );
}

export default App;
