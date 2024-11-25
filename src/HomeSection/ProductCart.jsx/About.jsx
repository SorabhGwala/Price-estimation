import { Search } from '@mui/icons-material'
import React from 'react'

const About = () => {
const handleClick =() =>{
        
        console.log('You clicked submit.');
      }
    
  return (

    <div className='grid justify-center'>
        <div className=' flex   justify-between items-center h-15 w-full my-4 py-4 p-3 border-2 border-white rounded-md '>
        <h1 className='text-[#47c16c]  text-3xl font-semibold text-left '>About Price Estimation</h1>
            <button className='text-white  mx-4' type="button"  onSubmit={handleClick }>A</button>
        </div>
        <section className='bg-[#282c34]  border-2 border-solid border-white rounded-lg w-[75vw] p-6 text-left shadow-md'>
                <h2 className='text-white    text-2xl font-semibold my-4'></h2>
                <div className='text-neutral-300'> 
                    <p>   When it comes to online shopping, historical price is an important factor to consider. product's price history can help you determine if now is the time to buy, or if you should wait for a better deal. Price history is the record of how a product's price has changed over time.</p>
                    <p>
                    Price History App offers you graphs & data for Price History. so that you can see how the price of a product has varied over the last few weeks, months, or years
                    </p>
                </div>
                <div>
                    <h2 className='text-[#47c16c] text-2xl font-semibold my-4'>Benefits </h2>
                    <ul className='text-neutral-300'>
                        <li>Get an idea of the product's historical selling price. This can help you decide if the current pricing is justifiable or not</li>
                        <li>Can help you identify price patterns over a period of time so that you can plan your buy in advance.</li>
                        <li>You can predict future prices of products based on the historical movement of price</li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-[#47c16c]  text-2xl font-semibold my-4'>What is a Price History?</h2>
                    <p className='text-neutral-300' >Price History is free to price monitoring tool. This tool helps you find Products' Historical Pricing information. with Price History, you can find the Lowest Ever Online Price of the Product you want. This tool displays the Product's Historical price changes in form of Interactive Graphical Charts. This tool helps you to find the best price Range to buy the product.</p>
                </div>
                <div className='text-neutral-300'>
                    <h2 className='text-[#47c16c]  text-2xl font-semibold my-4'>About Price History App</h2>
                    <p >
                    Price History App brings you a free tool called “Price History”. This tool helps you find Historical Price Information & charts for millions of products. this tool also provides you with Details of the Lowest, Average, and Highest Prices of Products.
                    </p>
                    <p className='my-3 '>Price History App brings you a free tool called “Price History”. This tool helps you find Historical Price Information & charts for millions of products. this tool also provides you with Details of the Lowest, Average, and Highest Prices of Products.</p>
                    <ul className=' mx-4'>
                    <li>Lowest Price after deducting lightning deal & Coupon</li>
                    <li>"Price + Shipping" comparison</li>
                    <li>Seller-wise Price Tracking</li>
                    <li>Shopping Assistance</li>
                    <li>Price Trend prediction</li>
                    </ul>
                </div>
                <div>
                    <h2  className='text-[#47c16c]  text-2xl font-semibold my-4'>Price Tracker by Price History</h2>
                    <p className='text-neutral-300'>Price Tracker is an integral part of Price History. This tool tracks the price of a product & saves you from the hassle of manual price checking. If you add any product to Daily Price Tracking, we will add the product to the preferential tracking list. This means the product will be tracked and Guaranteed at least once a day. Price tracking depends on various factors such as "Active Tracking" & "Popularity of Product". You can also set price alerts and Get price drop notifications instantly.</p>
                </div>
                <div className='text-neutral-300'>
                    <h2 className='text-[#47c16c]  text-2xl font-semibold my-4'>Amazon Price Tracker</h2>
                    <p  >This Amazon Price Tracker is the Most Advance & featureful price history tool ever. The Amazon price tracker can track Prime exclusive offers, Lightning Deals, and Coupons. These Extra offers are now tracked and displayed in the offer price section. The Prime-exclusive offers are only available for customers having an active Prime membership.</p>
                    <p>Price Tracker will help you find the lowest ever price for any Amazon product. You can check Amazon products in price history by pasting links, and searching for product names or ASINs.</p>
                </div>
                <div className='text-neutral-300'>
                    <h2 className='text-[#47c16c]  text-2xl font-semibold my-4'>Stores Supported:</h2>
                    <p  >Price History supports all major e-commerce stores in India. Such stores are Amazon India, Flipkart, TataCliq, Myntra, Croma, Ajio, Snapdeal, etc. As of Now Price Tracking is enabled only for Amazon & Flipkart only.</p>
                </div>
                <div className='text-neutral-300'>
                    <h2 className='text-[#47c16c]  text-2xl font-semibold my-4'>Features:</h2>
                    <p  >Even though all Price Trackers have the same functions of tracking the Price of a product. Some of the unique features of the tool make it stand out from the rest.</p>
                </div>

                <div className='text-neutral-300'>
                    <h2 className='text-[#47c16c]  text-2xl font-semibold my-4'>Advance Price Tracking</h2>
                    <p  >This tool has advanced price tracking functionality which adapts based on product popularity. Products with high popularity will be tracked more often. Products with frequent price changes will be given priority in tracking. Users can also request price updates for any product.</p>
                </div>
                <div className='text-neutral-300'>
                    <h2 className='text-[#47c16c]  text-2xl font-semibold my-4'>Lowest Cost of Ownership Method:</h2>
                    <p  >While the All Price tracking tools only focus on the Price of the Product, we check everything. Everything means the Price of the Product, Shipping cost, Lightning Deal offer, and Product coupon. We display prices with the lowest cost to the buyer. This feature is much useful when a seller quotes prices too low and charge unreasonable shipping charge.</p>
                </div>
                <div className='text-neutral-300'>
                    <h2 className='text-[#47c16c]  text-2xl font-semibold my-4'>Price Chart & Offer Chart</h2>
                    <p  >Our Historical Price chart contains two components, Lowest Listing Price and Offer Price. This helps you to find if the product was available below the listing price with a coupon or offer. As of now, the Offer Price feature is available for Amazon India only..</p>
                </div>




        </section>




    </div>
  )
}

export default About