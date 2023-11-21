import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Signin from './Signin'
import Signup from './Signup'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Authenticated from './Authenticated';



function Auth({loginData}) {
  const navigate=useNavigate()
useEffect(()=>{
  if(loginData.userRole){
    navigate(`/${loginData.userRole.toLowerCase()}/dashboard`)
  }
},[loginData])

    const [authKey,setAuthKey]=useState('SIGNIN')
    return (

   
    <div className=' h-screen w-screen text-white flex justify-center items-center world-map'>
    {
        authKey==='SIGNIN' && !loginData.name &&  <Signin setAuthKey={setAuthKey} />
    }
    {
      authKey==='SIGNUP' && !loginData.name &&  <Signup setAuthKey={setAuthKey} />
    }
    {
      loginData.name && <Authenticated loginData={loginData}/>
    }
    </div>


  )
}

export default Auth