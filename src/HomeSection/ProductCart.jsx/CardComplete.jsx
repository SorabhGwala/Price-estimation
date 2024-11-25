import React from "react";

const CardComplete = ({ product }) => {
    
  return (
    <div className="bg-white border border-gray-300 rounded-lg w-64 p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
      {/* Product Image */}
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md object-top"
      />
      {/* Product Details */}
      <h2 className="text-lg font-semibold mt-1">{product.brand}</h2>
      <p className="text-sm text-gray-500 mb-1">{product.title}</p>
      <div className="flex justify-evenly items-center">
        <p className="text-lg font-bold text-red-600">
          ₹{product.discountedPrice}{" "}
          <span className="line-through text-gray-500">₹{product.price}</span>
        </p>
        <p className="text-sm text-green-600">{product.discountPersent}% off</p>
      </div>
      {/* Available Sizes */}
      <div className="flex mt-1 text-md justify-evenly">
        <p className="text-sm text-gray-400">Color: {product.color}</p>
        <div className="flex items-center space-x-1">
          <span className="text-sm font-semibold">Sizes:</span>
          {product.size.map((s) => (
            <span
              key={s.name}
              className="px-2 py-1 bg-gray-200 rounded-full text-xs font-medium"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Check History
      </button>
    </div>
  );
};

export default CardComplete;
