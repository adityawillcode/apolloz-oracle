import React, { useEffect, useState } from 'react'
import StudentNavbar from './StudentNavbar'
import RightSidebar from './RightSidebar'
import Main from './Main'
import GroupList from './GroupList'
import StudentContextProvider from '../../Context/StudentContext'

function StudentDashboard() {
  
  const [notificationPanelOpen,setNotificatonPanelOpen]=useState(false)
  return (
  <StudentContextProvider>
  
  <div className='fixed inset-0 dashboard-bg'>
      <GroupList />
        <StudentNavbar setNotificatonPanelOpen={setNotificatonPanelOpen} notificationPanelOpen={notificationPanelOpen} />
        <RightSidebar notificationPanelOpen={notificationPanelOpen} setNotificationPanelOpen={setNotificatonPanelOpen} />
        <Main/>
    </div>
  </StudentContextProvider>
  )
}

export default StudentDashboard