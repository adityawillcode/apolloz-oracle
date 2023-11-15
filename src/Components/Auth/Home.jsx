import { useEffect,useState } from "react"
import { Navigate, useNavigate } from 'react-router-dom'
import { useLoginUser } from "../../Context/LoginUserContext"
function Home({setLoginData}) {
 const navigate=useNavigate()

  // const getLoginData =async () => {
  //     const result=await fetch('http://localhost:4000/getData',{credentials:'include'})
  //     const response=await result.json()
  //     if(!response.name) return navigate('/auth')
  //     else{
  //       setLoginData(response)
  //       if(!response.userRole) return navigate('/select-role')
  //       else return  navigate(`/${response.userRole}/dashboard`)
  //     }
  //   }
  
  
  //   useEffect(()=>{     getLoginData()   },[])




 return(
  <div className="flex justify-center items-center world-map">

  </div>
 )
}

export default Home