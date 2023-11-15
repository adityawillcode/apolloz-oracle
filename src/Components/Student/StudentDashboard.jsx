import React, { useEffect, useState } from 'react'
import StudentNavbar from './StudentNavbar'
import RightSidebar from './RightSidebar'
import Main from './Main'

function StudentDashboard() {
  
  const [notificationPanelOpen,setNotificatonPanelOpen]=useState(false)
  return (
    <div className='fixed inset-0 bg-[#2B2D31]'>
        <StudentNavbar setNotificatonPanelOpen={setNotificatonPanelOpen} notificationPanelOpen={notificationPanelOpen} />
        <RightSidebar notificationPanelOpen={notificationPanelOpen} setNotificationPanelOpen={setNotificatonPanelOpen} />
        <Main/>
    </div>
  )
}

export default StudentDashboard