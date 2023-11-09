import React, { useState } from 'react'
import { BsLayoutSidebarInset } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence ,motion} from 'framer-motion'

function RightSidebar({setNotificationPanelOpen,notificationPanelOpen}) {
const navigate=useNavigate()
const [notifications,setNotifications]=useState([])
  return (
 <>
   <AnimatePresence>
     {notificationPanelOpen && <motion.div transition={{duration:'0.1'}} initial={{x:'15rem'}} animate={{x:'0rem'}} exit={{x:'15rem'}} className='pt-[1rem] w-[15rem] bg-[#202123] right-0 fixed bottom-0 top-[3rem] shadow-[inset_-12px_-8px_40px_#46464620]  border-r border-black'>
<div  className='px-[1rem] w-full flex justify-between border-b-[1px] border-gray-500 h-[2.3rem]  text-gray-400 select-none ' style={{fontFamily:'Nunito'}}  > <BsLayoutSidebarInset size={22} className='inline-block  hover:text-white' onClick={()=>{setNotificationPanelOpen(false)}}/> <span>Notifications</span></div>
  {notifications.length>0 ? <div className='h-full flex flex-col'>
  
  </div>: <div className='h-full flex justify-center pt-[10rem] text-[15px] font-sans font-bold text-gray-400'>No Notifications Right now </div> }
  </motion.div>}
   </AnimatePresence>

 </>
  )
}

export default RightSidebar