import React, { useState } from 'react'
import Google from '../images/google.svg'

const Signup = () => {

  const [email, setEmail] = useState("")

  return (
    <div className='min-w-screen min-h-screen flex justify-center items-center'>
        <div className='flex flex-col w-[80%] md:w-[40%] gap-4 text-center'>
            <p className='text-2xl font-bold'>Create an account</p>
            <p>Enter your email to sign up for this app</p>
            <input type="email" value={email} onChange={(e) => setEmail(e?.target.value)} placeholder='johndoe@gmail.com' className='border-[1px] border-gray-400 rounded-md px-2 py-3'/>
            <button className='bg-black text-white py-2 rounded-lg'>Sign up with email</button>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-[rgba(130,130,130,1)] -translate-x-1/2 bg-white left-1/2">or continue with</span>
            </div>
            <button className='bg-[rgba(238,238,238,1)] py-2 rounded-lg relative'>
                <div className='absolute left-[4%] top-[30%]'>
                    <img src={Google} alt="google" className=''/>
                </div>
                <p>Google</p>
            </button>
            <p className='font-thin text-[rgba(130,130,130,1)]'>By clicking continue, you agree to our <span className='text-black font-light'>Terms of <br />Service</span> and <span className='text-black font-light'>Privacy Policy</span></p>
        </div>
    </div>
  )
}

export default Signup