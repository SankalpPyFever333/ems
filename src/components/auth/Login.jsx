import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandle = (event) => {
    event.preventDefault();
    console.log("email is:", email)
    console.log("password is:", password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form onSubmit={(event) => {
          submitHandle(event)
        }} className="flex flex-col items-center justify-center p-4">
          <input onChange={(e) => {
            setEmail(e.target.value)
          }} value={email} required type="email" placeholder="Enter email" className="border-2 bg-transparent border-emerald-600 rounded-full p-3 text-xl text-white outline-none placeholder:text-gray-400 my-2" />
          <input onChange={(e) => {
            setPassword(e.target.value)
          }} value={password} required type="password" placeholder="Enter password" className="border-2 bg-transparent border-emerald-600 rounded-full p-3 text-xl text-white outline-none placeholder:text-gray-400 my-2" />
          <button className="w-[100%] bg-emerald-600 rounded-full p-3 text-xl text-white my-2">
            Log in
          </button>
        </form>


      </div>
    </div>
  )
}

export default Login
