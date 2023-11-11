import React, { useState } from 'react'
import Signin from './Signin'
import Signup from './Signup'
import { GoogleOAuthProvider } from '@react-oauth/google';



function Auth() {
    const [authKey,setAuthKey]=useState('SIGNIN')
    return (
    <GoogleOAuthProvider clientId="406895328289-768of3k8hoe7q4jkg8g6m4q3274afj5o.apps.googleusercontent.com ">
   
    <div className='bg-[#2B2D31] h-screen w-screen text-white flex justify-center items-center'>
    {
        authKey==='SIGNIN' &&  <Signin setAuthKey={setAuthKey} />
    }
    {
      authKey==='SIGNUP' && <Signup setAuthKey={setAuthKey} />
    }
    </div>

  
    </GoogleOAuthProvider>
  )
}

export default Auth