import { Button, Grid } from '@mui/material'
import React from 'react'
import { mens_kurta } from '../../Data/Men/men_kurta';
import Cart from './Cart'
const item =mens_kurta.slice(0,10).map((item)=><Cart product={item}/> )

const Product = () => {

 
  return (
    

    <div>
        <section className='grid justify-center items-center  '>
            <div className='bg-neutral-900     justify-between   border-2 border-solid border-black rounded-lg w-[90vw]'>
              <div className=' text-white flex items-center gap-x-8 my-10  mx-20 grid-cols-4 '>
                <img className=' max-w-[30vw] h-[40vh] rounded-lg mr-0' src="data:image/jpeg;base64,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" alt="" />
                <div className='grid-cols-4'> 
                  <p className='flex justify-start'>Samsung 23 L Solo Microwave Oven (MS23A3513AK/TL, Black, Auto Cook Programs, Child Safety Lock, Memory Feature, Deodorization, Ceramic Enamel Cavity with 10 year warranty)</p>
                
                  
                  <button className='m-8 border-2 border-white rounded-xl px-6 py-2 bg-[#db3c30] text-white text-xl'>price 7,999</button>
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
                     <button className='w-10 m-4 font-bold text-yellow-400 border-blue-500' type="button">
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
            

        </section>

    </div>
  )
}

export default Product

