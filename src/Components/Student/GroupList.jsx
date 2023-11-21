import React, { useState } from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import {FaCheck} from 'react-icons/fa'
function GroupList() {
    const myGroups=[]
    const [showJoinGroupInput,setShowJoinGroupInput]=useState(true)
  return (
    <div className=' select-none pt-[1rem] w-[15rem] bg-black/40 left-0 border-r fixed bottom-0 top-[3rem] shadow-[inset_-12px_-8px_40px_#46464620]  border-l border-gray-500'>
   <div className='flex justify-between border-b border-gray-500 px-3 py-3'>
   <h1 className='text-[1.2rem] text-gray-400  py-1 ' style={{fontFamily:'Nunito'}}>Groups</h1>
    <button className='text-gray-400 border-gray-500 border px-3 rounded-md py-1 hover:text-white hover:border-white transition-all duration-100' onClick={()=>{setShowJoinGroupInput(!showJoinGroupInput)}}>{showJoinGroupInput?'Cancel': 'Join Group'}</button>   
   </div>
    <AnimatePresence>
         {
        showJoinGroupInput && <motion.div initial={{x:'-100%'}} animate={{x:'0'}} exit={{x:'-100%'}} transition={{duration:0.3}} className='w-full text-gray-300 items-center gap-2 flex px-3 py-3'>
            <input type="text" placeholder=' Enter Group Id' className='w-full rounded-md border-gray-500  border bg-transparent outline-none  px-3 py-1 placeholder:text-gray-300 ' style={{fontFamily:'Nunito'}} /><FaCheck className='hover:text-white cursor-pointer border  text-[20px] p-2 hover:border-white border-gray-500 rounded-md' size={30} />
        </motion.div>
     }  </AnimatePresence>
     <>
     {
       myGroups.length>0?
       <>
       <div>
        {
            myGroups.map((group,index)=>{
                return(
                    <div key={index}>
                        {group.name}
                    </div>
                )
            })
        }
       </div>
       </>:
        <div className='w-full flex flex-col py-5 gap-4 px-3'>
        <span className='w-full text-center font-bold text-[1rem] text-gray-400'>You are not in any group </span>
       </div> 
      }
     </>
      
      </div>
     
  )
}

export default GroupList