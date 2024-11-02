import React from 'react'

const Home = () => {
  return (
    <section>
    <div className='w-full h-dvh grid   gap-4 content-center justify-center  align-baseline text-white'>
    <div className=' text-3xl md:text-6xl font-bold grid justify-center items-center' >
     <div >
      

      <span >The </span><span className='text-[#47c16c]'>Centerlized </span><span>Effective</span>
     </div>
     <div className='flex justify-center'><span></span> <span>Price</span> <span>Estimation</span>
    </div>
    <div className='text-sm gray-500 flex justify-center mt-5 md:text-md'> Get Accurate Product Price Estimates Instantly</div>
    
    </div>
    <div className='flex justify-center mt-5'>
 
       

      <div className=  '  outline-none border-solid border-2 border-slate-500 rounded-2xl  bg-gray-300 text-blackn flex justify-between items-center   hover:scale-110 hover duration-500 md: w-4/6 p-1   sm:3/6 '>
         <h1 className='text-gray-500 font-semibold  mx-5' >  Search . . . .</h1>
         <button className='  border-solid border-2 border-slate-500 rounded-xl px-7 py-3 bg-[#8142f2] font-bold hover:bg-[#9a67f4]' type="button">Search</button> </div> 
    </div>
  
    </div>
    </section>
  )
}  

export default Home
