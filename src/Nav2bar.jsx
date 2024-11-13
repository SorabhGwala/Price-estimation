import React from 'react'

const Nav2bar = () => {
  return (
    <div>
      <section >
        <nav className=' bg-[#282c34] text-white flex  z-1 justify-around items-center  w-full h-20  border-solid border-3 border-white shadow-xl fixed'>
            <div className='flex'>
 
             <h1  className='font-semibold font-serif  bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] bg-clip-text text-transparent  ' ><span className='text-3xl'>T</span>he <span className='text-3xl '>P</span>redictors</h1>
            </div>
            
       

            <div  >

                <ul className=' hidden md:flex gap-x-20  '  >
                {/* <li className="  relative b-0 l-0 after:content-[''] after:absolute after:w-full after:h-[10px] after:bg-[#8142f2]  after:animate-nav hover:after:animate-nav">
  Home
</li> */}

                    <li className='hover:shadow-sm hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] active:text-black  active:shadow-lg  '>Home</li>
                    <li className='hover:shadow-sm hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] active:text-black  active:shadow-lg  '>About</li>
                    <li className='hover:shadow-sm hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] active:text-black  active:shadow-lg  '>Service</li>
                    <li className='hover:shadow-sm hover:shadow-[#bc98fd8c] p-2 active:bg-[#bc98fd8c] active:text-black  active:shadow-lg   '>Blog</li>
                     </ul>
            
            </div>
            <button className='p-2 md:hidden'>
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228">
    <path fill="#00D8FF" d="M210.483 73.824..."></path>
  </svg>
</button>

            <div className=' hidden md:flex gap-6'>
              <div className='border-2 border-solid border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] px-5 py-1 rounded-lg
               hover:shadow-xl hover:shadow-[#3494e6] ' >
                Login 
              </div>
              <div className='border-2 border-solid border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-[#3494e6] px-5 py-1 rounded-lg
               hover:shadow-xl hover:shadow-[#3494e6] ' >
                Sign up 
              </div>

              <div>
                
              </div>
                
              
            </div>
            
        </nav>
      </section>
    </div>
  )
}

export default Nav2bar