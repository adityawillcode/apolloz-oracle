import { useEffect,useState } from "react"
import { Navigate, useNavigate } from 'react-router-dom'
import { useLoginUser } from "../../Context/LoginUserContext"
function Home({loginData}) {
 const navigate=useNavigate()

useEffect(()=>{
if(loginData.userRole){
    navigate(`${loginData.userRole.toLowerCase()}/dashboard`)
}
},[loginData])

 return(
  <div className="flex justify-center items-center world-map">

  </div>
 )
}

export default Home