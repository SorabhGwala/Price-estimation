import React, { useState } from 'react';

export const Nav2bar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='sticky top-0 z-60'>
      <nav className='bg-[#242424] text-white flex z-1 justify-around items-center w-full h-20 border-solid border-3 border-white shadow-xl '>
        <div className='flex'>
          <h1 className='font-semibold font-serif bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] bg-clip-text text-transparent'>
            <span className='text-3xl'>T</span>he <span className='text-3xl'>P</span>redictors
          </h1>
        </div>
        
        <button 
          className='p-2 md:hidden' 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle Menu"
        >
          {/* SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="35.93" height="32" viewBox="0 0 256 228">
            <path fill="#00D8FF" d="M210.483 73.824..."></path>
          </svg>
        </button>

        <ul className={`hidden md:flex gap-x-20 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li className='hover:shadow-sm hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] active:text-black active:shadow-lg'>Home</li>
          <li className='hover:shadow-sm hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] active:text-black active:shadow-lg'>About</li>
          <li className='hover:shadow-sm hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] active:text-black active:shadow-lg'>Service</li>
          <li className='hover:shadow-sm hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] active:text-black active:shadow-lg'>Blog</li>
        </ul>

        <div className='hidden md:flex gap-6'>
          <div className='border-2 border-solid border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] px-5 py-1 rounded-lg hover:shadow-xl hover:shadow-[#3494e6]'>
            Login
          </div>
          <div className='border-2 border-solid border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] px-5 py-1 rounded-lg hover:shadow-xl hover:shadow-[#3494e6]'>
            Sign up
          </div>
        </div>
      </nav>
    </div>
  );
}
