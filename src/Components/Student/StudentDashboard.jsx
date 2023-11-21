import React, { useEffect, useState } from 'react'
import StudentNavbar from './StudentNavbar'
import RightSidebar from './RightSidebar'
import Main from './Main'
import GroupList from './GroupList'

function StudentDashboard() {
  
  const [notificationPanelOpen,setNotificatonPanelOpen]=useState(false)
  return (
    <div className='fixed inset-0 dashboard-bg'>
      <GroupList />
        <StudentNavbar setNotificatonPanelOpen={setNotificatonPanelOpen} notificationPanelOpen={notificationPanelOpen} />
        <RightSidebar notificationPanelOpen={notificationPanelOpen} setNotificationPanelOpen={setNotificatonPanelOpen} />
        <Main/>
    </div>
  )
}

export default StudentDashboard