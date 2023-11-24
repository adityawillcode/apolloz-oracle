import React, { useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {HiOutlineLogout} from 'react-icons/hi'
import {CgMenu} from 'react-icons/cg'
import {MdNotifications} from 'react-icons/md'
import {IoIosSettings} from 'react-icons/io'
import { AnimatePresence ,motion} from 'framer-motion'
import { useLoginUser } from '../../Context/LoginUserContext'
function StudentNavbar({setNotificatonPanelOpen,notificationPanelOpen}) {
  const [showSettings,setShowSettings] = useState(false)
  const {logoutUser}=useLoginUser()

  const handleLogout =async () => {
   await logoutUser()
   window.location.reload()
  };
  
  const openBar=(fun)=>{
    setNotificatonPanelOpen(false)
    setShowSettings(false)
    fun()
  }

  return (
    <div className='h-[3rem] bg-black/40  items-center  w-screen text-white border-b-[1px] border-gray-500 flex justify-between px-[1.7rem]' >
    <div className='text-gray-400 ' style={{fontFamily:'Nunito'}} data-tooltip-id='adminText' >Student</div>

    <div className='lg:flex h-full relative justify-center items-center hidden gap-[22px] cursor-pointer text-gray-400'><FaUserCircle  size={22} />  <IoIosSettings onClick={()=>{openBar(()=>{setShowSettings(!showSettings)})}} size={27} />  
     <MdNotifications onClick={()=>{openBar(()=>{setNotificatonPanelOpen(!notificationPanelOpen)})}} className='hover:text-white' size={24}/> 
          
          <AnimatePresence>
        {
          showSettings &&
           <motion.div initial={{y:'-5rem',opacity:0}} animate={{y:'0rem',opacity:1}} exit={{opacity:0}} transition={{duration:'0.2'}} className='text-white absolute top-[100%] w-[10rem] bg-black/40 flex flex-col rounded-md justify-center items-center '>
            <div className='py-2 flex items-center justify-center hover:bg-white/30 w-full' onClick={handleLogout}>Logout</div>
            <div className='py-2 flex items-center justify-center hover:bg-white/30 w-full'>Edit Profile</div>
          
          </motion.div>
        }
          </AnimatePresence>
        
      </div>
      
       
 
   </div>
  )
}

export default StudentNavbar