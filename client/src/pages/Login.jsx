import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("") 
    
  return (
    <div className='min-w-screen min-h-screen flex justify-center items-center'>
        <div className='flex flex-col w-[80%] md:w-[30%] gap-4 text-center'>
            <p className='text-2xl font-bold'>Log into SIMPIC 2025</p>
            <p>Enter your email to continue</p>
            <input type="email" value={email} onChange={(e) => setEmail(e?.target.value)} placeholder='johndoe@gmail.com' className='border-[1px] border-gray-400 rounded-md px-2 py-3'/>
            <button className='bg-black text-white py-2 rounded-lg'>Log In</button>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-[rgba(130,130,130,1)] -translate-x-1/2 bg-white left-1/2">Don't have an account</span>
            </div>
            <NavLink to="/signup" className="hover:underline">
                <p>Sign Up</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Login