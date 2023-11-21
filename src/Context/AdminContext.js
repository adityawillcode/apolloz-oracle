import React, { createContext, useContext, useEffect, useState } from 'react'

const AdminContext = createContext()
export const useAdminContext = () => {
  return useContext(AdminContext)
};
function AdminContextProvider({ children }) {
const [groupsOfAdmin,setGroupsOfAdmin] =useState([])
  const fetchGroups =async () => {  // it will fetch groups for admin with the user object  req.user
    const result = await fetch('http://localhost:4000/fetchGroups')
    const response=await result.json()
    if(response.length>0){
      setGroupsOfAdmin(response)
    }
  }
//   useEffect(()=>{
// fetchGroups()
//   },[])
  
const createGroup =async (groupName) => {
  console.log(groupName);
  const result=await fetch('http://localhost:4000/create-group',{
      method: 'POST',credentials:'include',body:JSON.stringify({groupName})
  })
  const response=await result.json()
  if(response){
    setGroupsOfAdmin((prevGroups)=>{
      return [...prevGroups,response]
    })
  }
};
const joinGroupAsAdmin=async ({groupId})=>{
  const result=await fetch('http://localhost:4000/join-gorup-as-admin',{
    method: 'POST',credentials:'include',body:JSON.stringify({groupId})
  })
  const response=await result.json()
  if(response){
    setGroupsOfAdmin((prevGroups)=>{
      return [...prevGroups,response]
    })
  }

}

  return (
    <AdminContext.Provider value={{groupsOfAdmin,createGroup,joinGroupAsAdmin}}>
      {children}
    </AdminContext.Provider>
  )

}

export default AdminContextProvider