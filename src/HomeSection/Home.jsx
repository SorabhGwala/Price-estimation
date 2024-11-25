import React from 'react'

const Home = () => {
  return (
    <section>
    <div className='w-full h-dvh grid  gap-4 content-center justify-center  align-baseline text-white'>
    <div className=' text-3xl md:text-6xl font-bold grid justify-center items-center' >
     <div >
      

      <span >The </span><span className='text-[#47c16c]'>Centerlized </span><span>Effective</span>
     </div>
     <div className='flex justify-center'><span></span> <span>Price</span> <span>Estimation</span>
    </div>
    <div className='text-sm gray-500 flex justify-center mt-5 md:text-md'> Get Accurate Product Price Estimates Instantly</div>
    
    </div>


    <div className="flex justify-center mt-5">
  <div className="w-72 outline-none border-2 border-slate-500 rounded-2xl bg-gray-300 text-black flex flex-col items-center hover:scale-110 duration-500 md:w-4/6 sm:w-3/6 ">
  
    <button
      className="w-full flex items-center border-2 border-[#ffff] rounded-xl p-0 bg-[#8142f2] text-white font-bold hover:bg-[#9a67f4]"
      type="button"
    >
      <input
        type="text"
        className="flex-grow px-4 py-4 text-[#515357] text-xl font-semibold  bg-gray-300 placeholder-[rgb(114,113,113)] outline-none rounded-lg"
        placeholder="Type here to search..."
        aria-label="Search box"
      />
      <span className="ml-2 px-3">Search</span>
    </button>
  </div>
  <div>
    <img src="/my-app/public/" alt="" />
  </div>
</div>




    </div>
    </section>
  )
}  

export default Home
