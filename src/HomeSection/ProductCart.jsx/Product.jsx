import { Button, Grid } from '@mui/material'
import React from 'react'
import { mens_kurta } from '../../Data/Men/men_kurta';
import Cart from './Cart'
const item =mens_kurta.slice(0,10).map((item)=><Cart product={item}/> )

const Product = () => {

 
  return (
    

    <div>
        <section className='grid justify-center items-center  '>
            <div className='bg-neutral-900     justify-between   border-2 border-solid border-black rounded-lg w-[75vw]'>
              <div className=' text-white flex items-center gap-x-8 my-10  mx-20 grid-cols-4 '>
                <img className=' w-[20vw]  rounded-lg ' src="/ptron-newly-launched-fusion-bold.png" alt="" />
                <div className='grid text-left  box-border border-2 border-neutral-700 rounded-lg p-5 text-balance w-[70vw] h-[30vh] text-md font-semibold'> 
                  <p>Samsung 23 L Solo Microwave Oven (MS23A3513AK/TL, Black, Auto Cook Programs, Child Safety Lock, Memory Feature, Deodorization, Ceramic Enamel Cavity with 10 year warranty)</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde! </p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde! </p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde! </p>
                  
                  {/* <button className=' border-2 w-20 border-white rounded-xl px-6 py-2 bg-[#db3c30] text-white text-xl'>price 7,999</button> */}
                </div>
                </div>

             <div className='  text-white flex justify-evenly py-1  font-mono   '>
              

                <div className='flex justify-center w-60 h-[10vh] text-white border-2  rounded-md border-white    bg-purple-800  '  >
                    <button type="button"className='py-3 px-4 bg-white border-black border-2 m-2 rounded-lg text-purple-800'>Price:1000</button>
                 
                     <hr className=' border-2 h-full py-5  rounded-xl ' />
                     <button className='w-10 m-4 font-bold text-yellow-400 border-blue-500' type="button">
                        <img src="/Flipkart-Logo.png" alt="" />
                      </button>
                       
                 </div>

                 <div className='flex justify-center w-60 h-[10vh] text-white border-2  rounded-md border-white    bg-[#00877a]  '  >
                    <button type="button"className='py-3 px-4 bg-white border-black border-2 m-2 rounded-lg text-purple-800'>Price:1000</button>
                 
                     <hr className=' border-2 h-full py-5  rounded-xl ' />
                     <a href="https://www.amazon.in/Samsung-Microwave-MS23A3513AK-TL-Black/dp/B09PV84DMX?th=1" target='_blank' >
                     <button className='w-10 m-4 font-bold text-yellow-400 border-blue-500' type="button">
    <img className='' src="/amazonlogo2.jpg" alt="" />
</button> </a>
                       
                 </div>
                 <div className='flex justify-center w-60 h-[10vh] text-white border-2  rounded-md border-white    bg-[#00877a]  '  >
                    <button type="button"className='py-3 px-4 bg-white border-black border-2 m-2 rounded-lg text-purple-800'>Price:1000</button>
                 
                     <hr className=' border-2 h-full py-5  rounded-xl ' />
                     <a href="https://www.jiomart.com/p/electronics/samsung-23-litre-solo-microwave-oven-with-indian-auto-cook-menu-ms23a3513ak-tl-black/592293060" target='_blank' >
                     <button className='w-14 m-2 font-bold text-yellow-400 border-blue-500' type="button">
                     <img className='w-20' src="jiomart.png" alt="" />
                      </button> </a>
                       
                     </div>    
                 </div>
           </div>



            <div>
              <ul className='bg-green-900 text-white flex justify-evenly py-1  font-mono '>
                <li className='text-[#e25f5e]'>Highest: ₹5,505 </li>
                <li className='text-[#deb30f]'>Average: ₹4,212</li>
                <li className='text-[#2c979b]'>Lowest: ₹3,499</li>
              </ul>
            </div>
            
            <div className='grid justify-center items-center'>

                  <div className='bg-[#021442]  border-2 border-solid border-white rounded-lg w-[75vw] p-6 '>
                    <h1 className="text-neutral-50 text-2xl font-semibold my-4 text-left">Price History Information</h1>
                    <p className='text-neutral-300 text-left'>You can check the price history of pTron Fusion Bold 100W Karaoke Bluetooth Party Speaker, Powerful Sound, RGB Lights, 3 mtr Wired Mic, BT /USB /SD Card /Aux Playback, Remote Control & Type C Charging (Black) here. This product's current Price in India is ₹3,999. The average and highest prices are ₹4,196 and ₹5,505 respectively.</p>
                    <div className='text-neutral-50 my-4 text-left' >
                      <span className='text-neutral-50 text-xl font-semibold my-4 text-left'>Lowest Ever Price</span><span className='mx-3 text-xl text-[#2c979b] '>₹3,499</span>
                      <p className='text-neutral-300 text-sm'>8th Nov 2024</p>
                    </div>
                    <div className='text-neutral-50 my-4 text-left' >
                      <span className='text-neutral-50 text-xl font-semibold my-4 text-left'>Average Ever Price</span><span className='mx-3 text-xl text-[#deb30f] '>₹3,499</span>
                      <p className='text-neutral-300 text-sm'>8th Nov 2024</p>
                    </div>
                    <div className='text-neutral-50 my-4 text-left' >
                      <span className='text-neutral-50 text-xl font-semibold my-4 text-left'>highest Ever Price</span><span className='mx-3 text-xl text-[#e25f5e] '>₹3,499</span>
                      <p className='text-neutral-300 text-sm'>8th Nov 2024</p>
                    </div>
                    
                    <div className='my-10'>
                      <h2  className="text-neutral-50 text-2xl font-semibold my-4 text-left">Current Price in India </h2>
                    <div className='text-neutral-300 my-4 text-left' >
                      
                      <span className=' text-xl font-semibold my-4 text-left'>Price</span><span className='mx-3 text-xl  text-neutral-400'>₹3,999</span>
             
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className=' text-xl font-semibold my-4 text-left'>MRP</span><span className='mx-3 text-xl  text-neutral-400 '>₹13,799</span>
             
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className='text-xl font-semibold my-4 text-left'>Savings</span><span className='mx-3 text-xl  text-neutral-400 '>₹9,800</span>
             
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className='text-xl font-semibold my-4 text-left'>Discount</span><span className='mx-3 text-xl text-neutral-400'>71.01%</span>
                  
                    </div>
                    </div>
\
                             
                    <div className='my-10'>
                      <h2  className="text-neutral-50 text-2xl font-semibold my-4 text-left">Details </h2>
                    <div className='text-neutral-300 my-4 text-left' >
                      
                      <span className=' text-lg font-semibold my-4 text-left'>Product Name</span><span className='mx-3 text-md  text-neutral-400'>pTron Fusion Bold 100W Karaoke Bluetooth Party Speaker, Powerful Sound, RGB Lights, 3 mtr Wired Mic, BT /USB /SD Card /Aux Playback, Remote Control & Type C Charging (Black)</span>
             
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className=' text-lg font-semibold my-4 text-left'>Store Product Code</span><span className='mx-3 text-md  text-neutral-400 '>B0CTR8P5Y2     </span>
             
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className='text-lg font-semibold my-4 text-left'>Store Name</span><span className='mx-3 text-md  text-neutral-400 '>	amazon.in</span>
             
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className='text-lg font-semibold my-4 text-left'>Rating</span><span className='mx-3 text-md text-neutral-400'>5.6 / 10</span>
                  
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className='text-lg font-semibold my-4 text-left'>Category</span><span className='mx-3 text-md text-neutral-400'>	Bluetooth Speakers</span>
                  
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className='text-lg font-semibold my-4 text-left'>Product Manufacturer  </span><span className='mx-3 text-md text-neutral-400'>Parude Technology (Shenzhen) Co. Ltd.</span>
                  
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className='text-lg font-semibold my-4 text-left'>Model Number</span><span className='mx-3 text-md text-neutral-400'>Fusion</span>
                  
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className='text-lg font-semibold my-4 text-left'>Model Name</span><span className='mx-3 text-md text-neutral-400'>Fusion</span>
                  
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className='text-lg font-semibold my-4 text-left'>Dimensions</span><span className='mx-3 text-md text-neutral-400'>23 x 25.6 x 56.8 cm; 3.18 kg</span>
                  
                    </div>
                    <div className='text-neutral-300 my-4 text-left' >
                      <span className='text-lg font-semibold my-4 text-left'>Country of Origin</span><span className='mx-3 text-md text-neutral-400'>China</span>
                  
                    </div>
                    </div>

                          
                    <div className='my-10'>
                      <h2  className="text-neutral-50 text-2xl font-semibold my-4 text-left">Rating and Reviews</h2>
                    <div className='text-neutral-300 my-4 text-left' >
                      
                      <span className=' text-neutral-300 text-md font-semibold my-4 text-left'>pTron Fusion Bold 100W Karaoke Bluetooth Party has 5.6 rating out of 10. This average rating is consist of 65 individual ratings. You can rate this product at product review page.</span>
             
                    </div>
                  
                    </div>
                    

                  </div>
                  
            </div>
            

        </section>

    </div>
  )
}

export default Product

