import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import LeftSidebar from './LeftSidebar'
import {BsLayoutSidebarInsetReverse} from 'react-icons/bs'
import Main from './Main'
import RightSidebar from './RightSidebar'
import  { useAdminContext } from '../../Context/AdminContext'
function AdminDashboard({loginData}) {
  
  const {groupsOfAdmin}=useAdminContext()
  const [leftSidebarOpen,setLeftSidebarOpen]=useState(true)
  const [selectedGroup,setSelectedGroup]=useState({})

  return (

      <div className='bg-[#2B2D31] dashboard-bg h-screen w-screen fixed admin-dashboard '>
    <AdminNavbar loginData={loginData} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
 <LeftSidebar setSelectedGroup={setSelectedGroup} groupsOfAdmin={groupsOfAdmin} selectedGroup={selectedGroup} setLeftSidebarOpen={setLeftSidebarOpen} leftSidebarOpen={leftSidebarOpen} /> 
  <BsLayoutSidebarInsetReverse onClick={()=>{setLeftSidebarOpen(true)}} className={`text-gray-400 ml-[1rem] mt-[1rem] cursor-pointer hover:text-white absolute ${leftSidebarOpen?'hidden':'block ' } `} size={22} />
  <Main/>
  <RightSidebar selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
    </div>


  )
}

export default AdminDashboard