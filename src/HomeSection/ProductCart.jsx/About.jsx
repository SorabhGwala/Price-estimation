import { Search } from '@mui/icons-material';
import React, { useState } from 'react';

const About = () => {
  const [showContent, setShowContent] = useState(true); // Show by default

  const handleClick = () => {
    setShowContent((prev) => !prev);
  };

  return (
    <div className='grid justify-center'>
      {/* Header and A button */}
      <div className='flex justify-between items-center h-15 w-[75vw] my-4 py-4 p-3 border-2 border-white rounded-md'>
        <h1 className='text-[#47c16c] text-3xl font-semibold text-left'>
          About Price Estimation
        </h1>
        <button
          className='text-white bg-[#47c16c] px-4 py-1 rounded hover:bg-green-600 transition-colors'
          type="button"
          onClick={handleClick}
        >
     
     {showContent ? "A" : "∀"}
        </button>
      </div>

      {/* Conditionally Render All Content */}
      {showContent && (
        <section className='bg-[#282c34] border-2 border-white rounded-lg w-[75vw] p-6 text-left shadow-md'>
          <div className='text-neutral-300'>
            <p>
              When it comes to online shopping, historical price is an important factor to consider.
              A product's price history can help you determine if now is the time to buy, or if you should wait for a better deal.
              Price history is the record of how a product's price has changed over time.
            </p>
            <p>
              Price History App offers you graphs & data for Price History, so that you can see how the price of a product has varied over the last few weeks, months, or years.
            </p>
          </div>

          <div>
            <h2 className='text-[#47c16c] text-2xl font-semibold my-4'>Benefits</h2>
            <ul className='text-neutral-300 list-disc list-inside'>
              <li>Get an idea of the product's historical selling price.</li>
              <li>Identify price patterns to plan your purchase in advance.</li>
              <li>Predict future product prices based on historical trends.</li>
            </ul>
          </div>

          <div>
            <h2 className='text-[#47c16c] text-2xl font-semibold my-4'>What is a Price History?</h2>
            <p className='text-neutral-300'>
              Price History is a free price monitoring tool. It helps you find a product’s historical pricing information including its lowest price ever.
              The tool shows interactive charts for price trends so you can buy smart.
            </p>
          </div>

          <div className='text-neutral-300'>
            <h2 className='text-[#47c16c] text-2xl font-semibold my-4'>About Price History App</h2>
            <p>
              Price History App helps you track historical pricing and view lowest, average, and highest prices of millions of products.
            </p>
            <ul className='list-disc list-inside mt-2'>
              <li>Lowest Price after lightning deal & coupon</li>
              <li>"Price + Shipping" comparison</li>
              <li>Seller-wise Price Tracking</li>
              <li>Shopping Assistance</li>
              <li>Price Trend Prediction</li>
            </ul>
          </div>

          <div className='text-neutral-300'>
            <h2 className='text-[#47c16c] text-2xl font-semibold my-4'>Price Tracker by Price History</h2>
            <p>
              Price Tracker monitors a product daily and notifies you about price drops.
              You can add items to your watchlist and track them automatically.
            </p>
          </div>

          <div className='text-neutral-300'>
            <h2 className='text-[#47c16c] text-2xl font-semibold my-4'>Amazon Price Tracker</h2>
            <p>
              This is an advanced tracker that can detect Prime-exclusive offers, Lightning Deals, and Coupons. You can track any Amazon product using name, URL, or ASIN.
            </p>
          </div>

          <div className='text-neutral-300'>
            <h2 className='text-[#47c16c] text-2xl font-semibold my-4'>Stores Supported:</h2>
            <p>
              Currently supported: Amazon India, Flipkart, TataCliq, Myntra, Croma, Ajio, Snapdeal. Price tracking is active for Amazon & Flipkart.
            </p>
          </div>

          <div className='text-neutral-300'>
            <h2 className='text-[#47c16c] text-2xl font-semibold my-4'>Features:</h2>
            <p>
              While all price trackers check prices, our tool stands out with its accuracy, graph insights, and multi-seller awareness.
            </p>
          </div>

          <div className='text-neutral-300'>
            <h2 className='text-[#47c16c] text-2xl font-semibold my-4'>Advance Price Tracking</h2>
            <p>
              Tracking adjusts based on popularity and frequency of price changes. You can also request price updates manually.
            </p>
          </div>

          <div className='text-neutral-300'>
            <h2 className='text-[#47c16c] text-2xl font-semibold my-4'>Lowest Cost of Ownership Method</h2>
            <p>
              We calculate total cost including shipping, deals, and coupons — so you always see the **true** lowest price.
            </p>
          </div>

          <div className='text-neutral-300'>
            <h2 className='text-[#47c16c] text-2xl font-semibold my-4'>Price Chart & Offer Chart</h2>
            <p>
              Charts include Lowest Listing Price and Offer Price. Helps identify offers that drop price below listing — currently for Amazon India only.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default About;
