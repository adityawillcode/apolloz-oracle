import React, { useEffect, useState } from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
function ChooseUserRole({setLoginData}) {
    const [selectedRole,setSelectedRole]=useState({})
    const navigate=useNavigate()
    const [show,setShow]=useState(false)
    const roles=[{userRole:'Admin'},{userRole:'Student'}]
    useEffect(()=>{
        setTimeout(()=>{
            setShow(true)
        },1000)
    },[])
    const handleClick =async () => {
       if(selectedRole.userRole){
    const result=await fetch('http://localhost:4000/update-user-role',{
        method:'POST',body:JSON.stringify(selectedRole),headers:{'Content-Type':'application/json'},credentials:'include'
    })
    const response=await result.json()
    if(response.name){
        const result2=await fetch('http://localhost:4000/create-profile',{
            method: 'POST',credentials:'include',headers:{'Content-Type': 'application/json'}
        })
        const response2=await result2.json()    
        if(response2.name){
            navigate(`/${response.userRole.toLowerCase()}/dashboard`)
        }
        setLoginData(response)
    }
       }
       else{
        alert('select a role')
       }
    
    }
    
    return (
    <div className='world-map flex justify-center items-center  text-white fixed inset-0' style={{fontFamily:'Kdam Thmor Pro'}} >
      
       <motion.div initial={{x:'100vw'}} animate={{x:'0vw'}} transition={{duration:'0.1'}} className='h-[280px] w-[700px] flex-col flex justify-center items-center'>
        <div className=' justify-center flex flex-1 '>
            <h1 className='text-[3rem] text-white '>
                Join Us As
            </h1>
        </div>
        <div className='flex  flex-1 justify-center items-center w-full'>
            
            {
                roles.map((role,index)=>{
                    return (
                       < div key={index} className=' flex-1 justify-center flex'>
                <span className={`border border-white p-5 rounded-lg py-2 backdrop-blur-sm cursor-pointer hover:bg-white/10 shadow-md shadow-gray-400 ${selectedRole.userRole==role.userRole? 'bg-white text-black':''}`} onClick={()=>{setSelectedRole(role);console.log(selectedRole);}}>{role.userRole}</span>
            </div>
                    )
                })
            }
        </div>
        </motion.div>
       <div className='fixed bottom-[3rem] right-[6rem] border border-white px-5 rounded-lg hover:bg-white/10 cursor-pointer py-2' onClick={handleClick}><span className=''>Next</span> <FaArrowRight  /></div>
      
    </div>
  )
}

export default ChooseUserRole