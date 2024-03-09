import React, {useState} from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })
    const {loading, signup} = useSignup()

    const inputHandler = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    const handleCheckboxChange = (gender) =>{
        setInputs({...inputs, gender})
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        await signup(inputs)
        
    }



  return (
    <div className='flex flex-col items-center justify-center min-w-96  mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up <span className='text-blue-500'>Chatt App</span>
        </h1>
        <form onSubmit={submitHandler}>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' name='fullName' value={inputs.fullName} onChange={inputHandler} placeholder='Durga Prasad' className='w-full input input-bordered h-10' />
        </div>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' name='username' value={inputs.username} onChange={inputHandler} placeholder='prasad' className='w-full input input-bordered h-10' />
        </div>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' name='password' value={inputs.password} onChange={inputHandler} placeholder='Enter password' className='w-full input input-bordered h-10' />
        </div>
        <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' name='confirmPassword' value={inputs.confirmPassword} onChange={inputHandler} placeholder='Confirm password' className='w-full input input-bordered h-10' />
        </div>
        {/* gender checkbox */}
        <GenderCheckbox onCheckboxChange = {handleCheckboxChange}  selectedGender={inputs.gender}/>

        <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                Already have an account?
            </Link> 
        <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default SignUp
