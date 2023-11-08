import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import LeftSidebar from './LeftSidebar'
import {BsLayoutSidebarInsetReverse} from 'react-icons/bs'
import Main from './Main'
function AdminDashboard() {
  const [leftSidebarOpen,setLeftSidebarOpen]=useState(false)
  return (
 
      <div className='bg-[#2B2D31] h-screen w-screen fixed'>
    <AdminNavbar />
 <LeftSidebar setLeftSidebarOpen={setLeftSidebarOpen} leftSidebarOpen={leftSidebarOpen} /> 
  <BsLayoutSidebarInsetReverse onClick={()=>{setLeftSidebarOpen(true)}} className={`text-gray-400 ml-[1rem] mt-[1rem] cursor-pointer hover:text-white absolute ${leftSidebarOpen?'hidden':'block ' } `} size={22} />
  <Main/>
    </div>

  )
}

export default AdminDashboard