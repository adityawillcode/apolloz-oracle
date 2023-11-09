import React, { useState } from 'react'
import { BsLayoutSidebarInset } from 'react-icons/bs'
import { useNavigate,useParams } from 'react-router-dom'
import { AnimatePresence ,motion} from 'framer-motion'

function LeftSidebar({setLeftSidebarOpen,leftSidebarOpen}) {
const {basename}=useParams()


const navigate=useNavigate()
  return (
 <>
   <AnimatePresence>
     {leftSidebarOpen && <motion.div transition={{duration:'0.1'}} initial={{x:'-15rem'}} animate={{x:'0rem'}} exit={{x:'-15rem'}} className='pt-[1rem] w-[15rem] bg-[#202123] fixed bottom-0 top-[3rem] shadow-[inset_-12px_-8px_40px_#46464620]  border-r border-black'>
        <BsLayoutSidebarInset size={22} className='text-gray-400  absolute right-[1rem] hover:text-white' onClick={()=>{setLeftSidebarOpen(false)}}/>
  <div className='h-full flex flex-col'>
  <div className=' mt-[2rem] border-t border-gray-600 py-[1rem] pl-[1rem]  border-b'>
    <span className=' text-gray-400'>Groups</span>
   <ul className='pl-[1rem] text-gray-500'>
    <li>group 1</li>
    <li>group 1</li>
    <li>group 1</li>
    <li>group 1</li>
    <li>group 1</li>
   </ul>
    </div>
    <div className='pt-[1rem] flex flex-col w-full'>
    <button className='border-[1px] text-gray-400 py-[5px] rounded-md border-gray-400 hover:border-gray-300 hover:text-gray-300 flex justify-center items-center' onClick={()=>{navigate('/admin/dashboard/create-quiz')}}>Generate a quiz</button>
    </div>
  </div>
  </motion.div>}
   </AnimatePresence>

 </>
  )
}

export default LeftSidebar