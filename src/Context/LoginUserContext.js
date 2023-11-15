import React,{createContext,useContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
const LoginUser=createContext()
export const useLoginUser = () => {
    return useContext(LoginUser)
};


function LoginUserProvider({children}) {


  return(
    <LoginUser.Provider value={{}}>
    {children}
</LoginUser.Provider>
  )

}

export default LoginUserProvider