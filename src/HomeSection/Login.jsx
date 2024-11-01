import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('@gmail.com');
  const [password, setPassword] = useState('');

  const handleClick = (event) => {
    event.preventDefault(); // Prevent form submission
    console.log(email); 
  };

  return (
    <div className='  text-black flex justify-center'>
      <div className='flex  items-center w-[80vw] h-[80vh] border-2 border-solid border-white rounded-md my-20 bg-slate-200'>
        <div className='text-2xl  text-black w-[50vw]'>
          <div>
            <p>"Hello Friend"</p>
            <img src="https://cdnl.iconscout.com/lottie/premium/thumb/profile-login-animation-download-in-lottie-json-gif-static-svg-file-formats--account-sign-user-business-pack-people-animations-5627366.gif" alt="Login Animation" />
          </div>
        </div>

        <main>
          <div className='container w-[20vw] h-[50vh]  border-2 border-[#5e5e5e73] rounded-lg  grid items-center '>
            <div className='grid justify-center my-10  '>
              <h1 className=' text-green-600 text-3xl my-4 font-medium'>Login</h1>
              <input 
                className=' m-3  bg-transparent focus:outline-none after:  border-2 border-[#5e5e5e73] rounded-md p-1' 
                type="email" 
                placeholder='Enter Email' 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                className='m-3 bg-transparent focus:outline-none after:  border-2 border-[#5e5e5e73] rounded-md p-1 ' 
                type="password" 
                placeholder='Enter Password' 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              
              <input 
                className='border-[#5e5e5e73] px-3 py-1 m-5 w-20 border-2 active:bg-[#5e5e5e73] rounded-md scale-105' 
                onClick={handleClick} 
                type="submit" 
                value="Submit" 
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
