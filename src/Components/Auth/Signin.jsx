import React ,{useState} from 'react'
import { GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
function SignIn({setAuthKey}) {
  const [data,setData]=useState({})
  const {register,handleSubmit,reset}=useForm()
  const [showPassword,setShowPassword]=useState(false)
  const navigate=useNavigate()
 
 
  const localLogin = async (formData) => {   
    const result=await fetch('http://localhost:4000/auth/signin',{
      method:'POST',headers:{
        'Content-Type': 'application/json'
      },body: JSON.stringify(formData)
    })
    const response=await result.json()
    if(response.message)
    window.open(window.location.origin,"_self")
  };

  const googleLogin = () => {

    window.open(`http://localhost:4000/auth/google`,"_self")
  };
 
  const githubLogin = () => {

    window.open(`http://localhost:4000/auth/github`,"_self")
  };
 
  
  
  
  return (
    <div className=' auth-box w-[25rem] p-[1rem] border-[2px] rounded-lg flex justify-center items-center flex-col border-gray-500 bg-white/20 select-none  shadow-[0px_0px_10px_0px_#ffffff] '>
      <h1 className='text-gray-300 text-[1.5rem] ' style={{fontFamily:'Nunito'}}>Sign In </h1>
      <form action="" onSubmit={handleSubmit(localLogin)} className='flex flex-col w-full p-[2rem] gap-[0.5rem] text-gray-300' style={{fontFamily:'Nunito'}}>
        <div className='flex flex-col gap-[2rem]'>
        <input type="email" {...register('username')} className='text-gray-300 bg-transparent border-b-[2px] border-gray-500 outline-none  px-[0.4rem]' placeholder='Enter Email' />
        <input type={`${showPassword?'text':'password'}`} minLength={4} {...register('password')} className='text-gray-300 bg-transparent border-b-[2px] px-[0.4rem] border-gray-500 outline-none ' placeholder='Enter Password'/>
        </div>
        <div className='flex justify-between pt-[0.4rem]'><span className='text-[14px] flex justify-center items-center cursor-pointer gap-[3px]' onClick={()=>{setShowPassword(!showPassword)}} ><input type="checkbox" onChange={()=>{setShowPassword(!showPassword)}} checked={showPassword} className='bg-transparent' />show password</span> <span className='text-[14px] text-gray-300 font-thin cursor-pointer' onClick={()=>{setAuthKey('SIGNIN')}}>Already an account?</span></div>
      <div className='w-full flex justify-between gap-4 mt-[0.6rem]'>
        <button className='border  border-gray-200 py-[5px] rounded-md text-[0.9rem] hover:bg-gray-800 flex-1 ' type='submit' >Sign In</button>
      <button className='border  border-gray-200 py-[5px] rounded-md text-[0.9rem] hover:bg-gray-800 flex-1 '  onClick={()=>{setAuthKey('SIGNUP')}}>Sign up</button>
      
      </div>
     <div className='flex justify-center items-center'> <span className='flex-grow h-[1px] bg-gray-400'></span><span className='text-[10px] text-gray-400'>continue with</span><span className='flex-grow h-[1px] bg-gray-400'></span></div>
    <GoogleLoginButton size='30px' align='center' iconSize='20px' style={{background:'white',fontFamily:'Nunito' }} onClick={googleLogin} >Signup with Google</GoogleLoginButton>
    <GithubLoginButton size='30px' align='center' iconSize='20px' iconColor='black'  style={{background:'white',fontFamily:'Nunito' }} text='black' onClick={githubLogin} >Signup with Github</GithubLoginButton>

      </form>
     

    </div>
  )
}

export default SignIn