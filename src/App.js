import './App.css';
import Footer from './HomeSection/Footer';
import Home from './HomeSection/Home';
import Login from './HomeSection/Login';
import Cart from './HomeSection/ProductCart.jsx/Cart';
import Product from './HomeSection/ProductCart.jsx/Product';

import Nav2bar from './Nav2bar';

function App() {
  return (
    <div className="App">
   
    <Nav2bar/>
    <Home/>
    {/* <Cart/> */}
    {/* <Login/> */}
    <Product/>
{/*    
     <Footer/> */}
      


    </div>
  );
}

export default App;
