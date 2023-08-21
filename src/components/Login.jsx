import React from 'react'
import { googleIcon, appleIcon } from '../utils/icons'
import { useDispatch } from 'react-redux';
import { signInwithGoogle } from '../utils/userSlice';

const Login = () => {

    const dispatch = useDispatch();

    return (
        <div className='flex flex-col sm:flex-row h-screen w-full'>
            <div className='w-screen sm:w-[40%] bg-black h-full flex items-center justify-center'>
                <h1 className='text-white text-5xl font-bold'>Board.</h1>
            </div>
            <div className='w-screen p-3 sm:w-[60%] bg-gray-100 flex flex-col justify-center '>
                <div className=' flex flex-col m-auto mt-28 '>
                    <h2 className='text-4xl font-bold'>Sign In</h2>
                    <h4>Sign in to your account</h4>
                    <div className='text-gray-400 mt-5 flex'>
                        <button onClick={()=>dispatch(signInwithGoogle())} className='bg-white rounded-lg px-2 py-1 text-sm flex items-center'><span className='mr-3'>{googleIcon}</span> Sign in with Google</button>
                        <button className='ml-8 bg-white rounded-lg px-2 py-1 text-sm flex items-center'><span className='mr-3'>{appleIcon}</span> Sign in with Apple</button>
                    </div>
                    <div className='mt-3 p-5 w-96 flex flex-col bg-white rounded-xl'>
                        <label className='text-gray-700 '>Email Address</label>
                        <input className='mt-1 bg-gray-100 px-3 py-2 w-80 rounded-lg m-auto'></input>

                        <label className='text-gray-700 mt-4'>Password</label>
                        <input className='mt-1 bg-gray-100 px-3 py-2 w-80 rounded-lg m-auto'></input>

                        <a className='text-blue-800 text-sm cursor-pointer font-medium mt-4'>Forgot Password?</a>

                        <button className='mt-4 bg-black text-white px-8 py-2 rounded-xl w-80 m-auto'>Sign In</button>
                    </div>
                    <h4 className='text-gray-500 text-center text-base font-medium mt-4'>Don't have an account? <a className='text-blue-800 cursor-pointer'>Register here</a></h4>
                </div>
            </div>
        </div>
    )
}

export default Login