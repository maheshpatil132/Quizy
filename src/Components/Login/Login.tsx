import React, { useState } from 'react'

const Login : React.FC = () => {
  
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  return (
    <div className=' min-h-screen py-10 flex justify-center items-center flex-col '>
        <h1 className=' text-3xl text-center font-semibold mb-4'>Login Into Your Account</h1>
        <form action="" className=' px-5 py-5 flex flex-col gap-5 w-full md:w-1/3 mx-auto'>
          <div className=' bg-gray-100 rounded-sm '>
            <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='Username' className='py-3 px-4 w-full outline-none bg-transparent' />
          </div>
          <div className=' bg-gray-100 rounded-sm '>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='password' className=' py-3 px-4 w-full outline-none bg-transparent' />
          </div>
          <button className=' mt-2 bg-Primary text-white py-2 rounded-sm font-semibold text-lg'>Login</button>
        </form>
        <div>
          <p className=' mt-2 '>Don't have a Account ? <span className=' text-Primary font-semibold'><a href="/">Create Account</a></span></p>
        </div>
    </div>
  )
}

export default Login