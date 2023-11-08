import React, { useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {HiOutlineLogout} from 'react-icons/hi'
import {CgMenu} from 'react-icons/cg'
import { Tooltip } from 'react-tooltip'
function AdminNavbar() {
    const [showMenu,setShowMenu]=useState(false)
  return (
    <div className='h-[3rem] bg-[#2B2D31]  items-center  w-screen text-white border-b-[2px] border-[#1E1F22] flex justify-between px-[1.7rem]' >
     <div className='text-gray-400 ' style={{fontFamily:'Nunito'}} data-tooltip-id='adminText' >Admin</div>
        <div className='lg:flex h-full justify-center items-center hidden gap-[22px] cursor-pointer text-gray-400'><FaUserCircle  size={22} /> <HiOutlineLogout size={27}/>   </div>
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

export default AdminNavbar