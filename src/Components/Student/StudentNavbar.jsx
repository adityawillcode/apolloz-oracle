import React, { useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {HiOutlineLogout} from 'react-icons/hi'
import {CgMenu} from 'react-icons/cg'
import {MdNotifications} from 'react-icons/md'

function StudentNavbar({setNotificatonPanelOpen,notificationPanelOpen}) {
  const [showMenu,setShowMenu]=useState(false)
  return (
    <div className='h-[3rem] bg-[#2B2D31]  items-center  w-screen text-white border-b-[1px] border-gray-500 flex justify-between px-[1.7rem]' >
    <div className='text-gray-400 ' style={{fontFamily:'Nunito'}} data-tooltip-id='adminText' >Student</div>
       <div className='lg:flex h-full justify-center items-center hidden gap-[22px] cursor-pointer text-gray-400'> <MdNotifications onClick={()=>{setNotificatonPanelOpen(!notificationPanelOpen)}} className='hover:text-white' size={24}/> <FaUserCircle  className='hover:text-white' size={22} /> <HiOutlineLogout className='hover:text-white' onClick={()=>{window.close()}} size={27}/>   </div>
       <div className=' cursor-pointer lg:hidden relative' onClick={()=>{setShowMenu(!showMenu)}}><CgMenu size={24}/>
       <ul className={`${showMenu ?'block':'hidden'}  absolute top-[100%] right-[0px] bg-[#2B2D31] shadow-[0px_0px_1px_0px_#ffffff]  select-none`}>
           
               <li className='border-b px-[1.4rem] py-[6px] hover:bg-white hover:text-black transition-all duration-100'>profile</li>
               <li className='border-b px-[1.4rem] py-[6px] hover:bg-white hover:text-black transition-all duration-100'>logout</li>
               <li className='border-b px-[1.4rem] py-[6px] hover:bg-white hover:text-black transition-all duration-100'>settings</li>
           </ul>
       </div>
       
 
   </div>
  )
}

export default StudentNavbar