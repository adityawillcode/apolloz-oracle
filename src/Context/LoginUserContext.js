import React,{createContext,useContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
const LoginUser=createContext()
export const useLoginUser = () => {
    return useContext(LoginUser)
};

function LoginUserProvider({children}) {
  const [wantLogout,setWantLogout]=useState(false)
  
  // logout function
  
  const logoutUser =async () => {
  try {
    const result=await fetch('http://localhost:4000/logout',{credentials:'include',method:'POST'})
    const response=await result.json()
    if(response.status==200){
      setWantLogout(true)
    }
  } catch (error) {
    console.log({error: error.message})
  }
  }


  return(
    <LoginUser.Provider value={{logoutUser,wantLogout}}>
    {children}
</LoginUser.Provider>
  )

}

export default LoginUserProvider