import React from 'react';

const Cart = ({ product }) => {
  if (!product) return null; // Prevent rendering if product is undefined

  return (
  
  
    <section className='  text-white flex  z-10  w-full  grid-flow-row'>
    <div className="  m-10 flex  max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img className="object-cover object-top w-full " src={product.imageUrl} alt={product.name || 'Product'} />
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${product.price}</span>
            <span className="text-sm text-slate-900 line-through">${product.oldPrice}</span>
          </p>
          <div className="flex items-center m-1">
            {[...Array(5)].map((_, index) => (
              <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs fon1t-semibold">5.0</span>
          </div>
        </div>
        <a href="https://www.amazon.com/" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700">
          Price History
        </a>
      </div>
     
    </div>
    </section>
    
  );
};

export default Cart;
