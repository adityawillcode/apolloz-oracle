import React, { useEffect, useState } from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import {FaArrowRight} from 'react-icons/fa'
function ChooseUserRole() {
    const [selectedRole,setSelectedRole]=useState({})
    const [show,setShow]=useState(false)
    const roles=[{role:'Admin'},{role:'Student'}]
    useEffect(()=>{
        setTimeout(()=>{
            setShow(true)
        },1000)
    },[])
    return (
    <div className='world-map flex justify-center items-center  text-white fixed inset-0' style={{fontFamily:'Kdam Thmor Pro'}} >
       <AnimatePresence>
       { show && <motion.div initial={{x:'100vw'}} animate={{x:'0vw'}} transition={{duration:'0.1'}} className='h-[280px] w-[700px] flex-col flex justify-center items-center'>
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
                <span className={`border border-white p-5 rounded-lg py-2 backdrop-blur-sm cursor-pointer hover:bg-white/10 shadow-md shadow-gray-400 ${selectedRole.role==role.role? 'bg-white text-black':''}`} onClick={()=>{setSelectedRole(role);console.log(selectedRole);}}>{role.role}</span>
            </div>
                    )
                })
            }
        </div>
        </motion.div>}
       </AnimatePresence>
       <div className='fixed bottom-[3rem] right-[6rem] border border-white px-5 rounded-lg hover:bg-white/10 cursor-pointer py-2'><span className=''>Next</span> <FaArrowRight  /></div>
    </div>
  )
}

export default ChooseUserRole