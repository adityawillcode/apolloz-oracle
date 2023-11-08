import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import LeftSidebar from './LeftSidebar'
import {BsLayoutSidebarInsetReverse} from 'react-icons/bs'
import {AnimatePresence,motion} from 'framer-motion'
function AdminDashboard() {
  const [leftSidebarOpen,setLeftSidebarOpen]=useState(false)
  return (
 
      <div className='bg-[#2B2D31] h-screen w-screen'>
    <AdminNavbar />
 <LeftSidebar setLeftSidebarOpen={setLeftSidebarOpen} leftSidebarOpen={leftSidebarOpen} /> 
  <BsLayoutSidebarInsetReverse onClick={()=>{setLeftSidebarOpen(true)}} className={`text-gray-400 ml-[1rem] mt-[1rem] cursor-pointer hover:text-white ${leftSidebarOpen?'hidden':'block ' } `} size={22} />
    </div>

  )
}

export default AdminDashboard