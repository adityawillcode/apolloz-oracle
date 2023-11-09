import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
function Signin({setAuthKey}) {
  const {register,handleSubmit,reset}=useForm()
  const [showPassword,setShowPassword]=useState(false)
  const onSubmit= () => {

  };
  // shadow-[0px_0px_100px_0px_#f7fafc]
  return (
    <div className='w-[25rem] p-[1rem] border-[2px] rounded-lg flex justify-center items-center flex-col border-gray-500 select-none  shadow-[0px_0px_10px_0px_#ffffff] '>
      <h1 className='text-gray-300 text-[1.5rem] ' style={{fontFamily:'Nunito'}}>Sign In </h1>
      <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full p-[2rem] gap-[0.5rem] text-gray-300' style={{fontFamily:'Nunito'}}>
        <div className='flex flex-col gap-[2rem]'>
        <input type="email" {...register('email')} className='bg-transparent border-b-[2px] border-gray-500 outline-none text-gray-300 ' placeholder='Enter Email' />
        <input type={`${showPassword?'text':'password'}`}  {...register('password')} className='bg-transparent border-b-[2px] text-gray-300 border-gray-500 outline-none ' placeholder='Enter Password'/>
        </div>
        <div className='flex justify-between pt-[0.4rem]'><span className='text-[14px] flex justify-center items-center cursor-pointer gap-[3px]' onClick={()=>{setShowPassword(!showPassword)}} ><input type="checkbox" checked={showPassword} className='bg-transparent' />show password</span> <span className='text-[14px] text-gray-300 font-thin cursor-pointer' onClick={()=>{setAuthKey('SIGNUP')}}>don't have an account?</span></div>
      <div className='w-full flex justify-between gap-4 mt-[0.6rem]'>
      <button className='border  border-gray-500 py-[5px] rounded-md text-[0.9rem] hover:bg-gray-800 flex-1 ' type='submit'>Sign in</button>
        <button className='border  border-gray-500 py-[5px] rounded-md text-[0.9rem] hover:bg-gray-800 flex-1 ' onClick={()=>{setAuthKey('SIGNUP')}}>Sign up</button>
      </div>
      </form>
     

    </div>
  )
}

export default Signin