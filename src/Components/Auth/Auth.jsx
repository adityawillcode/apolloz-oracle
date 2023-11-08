import React, { useState } from 'react'
import Signin from './Signin'
import Signup from './Signup'

function Auth() {
    const [authKey,setAuthKey]=useState('SIGNIN')
    return (
    <div className='bg-[#2B2D31] h-screen w-screen text-white flex justify-center items-center'>
    {
        authKey==='SIGNIN' &&  <Signin setAuthKey={setAuthKey} />
    }
    {
      authKey==='SIGNUP' && <Signup setAuthKey={setAuthKey} />
    }
    </div>
  )
}

export default Auth