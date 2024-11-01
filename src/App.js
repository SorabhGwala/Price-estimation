import './App.css';
import Footer from './HomeSection/Footer';
import Home from './HomeSection/Home';
import Login from './HomeSection/Login';
import Product from './HomeSection/ProductCart.jsx/Product';
import Nav2bar from './Nav2bar';

function App() {
  return (
    <div className="App">
   
    <Nav2bar/>
    <Home/>
    <Login/>
    <Footer/>
    <Product/>

    
    </div>
  );
}

export default App;
