import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
})

const {loading, login} = useLogin()



const inputHandler = (e) =>{
  setInputs({
      ...inputs,
      [e.target.name] : e.target.value
  })
}

const submitHandler = async (e) => {
  e.preventDefault()
  await login(inputs.username, inputs.password)
}

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login <span className='text-blue-500'>Chatt App</span>
        </h1>
        <form onSubmit={submitHandler}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type='text' name='username' onChange={inputHandler} value={inputs.username} placeholder='Enter username' className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type='password' name='password' onChange={inputHandler} value={inputs.password} placeholder='Enter Password' className='w-full input input-bordered h-10' />
            </div>
            <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Don't"} have an account?
            </Link> 
            <div>
                <button className='btn btn-block mt-4 btn-sm' type='submit' disabled={loading}>
                  {loading? <span className='loading loading-spinner'></span> : "Login"}
                </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
