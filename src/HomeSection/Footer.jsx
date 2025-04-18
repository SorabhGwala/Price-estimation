import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Facebook, Instagram, WhatsApp,Twitter } from '@mui/icons-material';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button, Typography } from '@mui/material';
const Footer = () => {
  return (
    <div className='flex justify-center mt-4 '>
    <div className=' text-white w-[90vw] h-[50vh] border-2 border-white rounded-xl 
     shadow-md shadow-green-400  bg-gradient-to-b from-green-700 via-green-950 to-black  text-start   ' >
   <div className=' flex justify-around flex-wrap' >
   <div> <h1 className='text-gray-400 font-semibold text-xl m-3  md:text-xl '> PRODUCT</h1>
          <h6>Microwave Device</h6>
          <h6>Transmission Lines</h6>
          <h6>HF/VHF equipment</h6>
          <h6>Tech Radio</h6>
   </div>
   <div> <h1  className='text-gray-400 font-semibold text-xl m-3 '>COMPANY</h1>
          <h6>About us</h6>
          <h6>Careers</h6>
          <h6>Blog</h6>
          
   </div>
   <div> <h1 className='text-gray-400 font-semibold text-xl m-3 '>SUPPORT</h1>
          <h6>FAQs</h6>
          <h6>Contact Support</h6>
          <h6>Warranty Information</h6>
           
   </div>
    
    <div className=' text-gray-300 my-14  '>
      <h1><span> Address:</span> <span>123 BUSiness Rd,city,State,Zip</span></h1>
      <h1><span>Phone No.:</span> <span>7850917175</span></h1>
      <h1><span>Email:</span> <span>SorabhGwala@gmail.com</span></h1>
    </div>
    </div>
    <div>
      

<h1 className='flex justify-center text-gray-300'>@2024 The Pridictor || Term & Policy || Cookies</h1>
<span className='flex justify-center mt-8 gap-4'>
<Instagram/>
<Facebook/>
<WhatsApp/> 
<Twitter/>
</span>

    </div>
    </div>
    </div>
  )
}

export default Footer