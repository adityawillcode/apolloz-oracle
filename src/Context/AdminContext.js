import React, { createContext, useContext, useEffect, useState } from 'react'

const AdminContext = createContext()
export const useAdminContext = () => {
  return useContext(AdminContext)
};
function AdminContextProvider({ children }) {
const [groupsOfAdmin,setGroupsOfAdmin] =useState([])
const [studentList,setStudentList]=useState([])
const [studentsInGroupForQuiz,setStudentsInGroupForQuiz] = useState([])

const getStudentList =async (groupId) =>{
const result=await fetch(`http://localhost:4000/get-student-list?groupId=${groupId}`,{credentials:'include'})
const response=await result.json()
if(response){
  setStudentList(response)
}
}

const getGroupsOfAdmin =async () => {  // it will fetch groups for admin with the user object  req.user
    const result = await fetch('http://localhost:4000/fetch-admin-groups',{credentials:'include'})
    const response=await result.json()
    if(response.length>0){
      setGroupsOfAdmin(response)
    }
  }

  
const createGroup =async (groupName) => {
  const result=await fetch('http://localhost:4000/create-group',{
      method: 'POST',credentials:'include',body:JSON.stringify({groupName}),headers: {'Content-Type': 'application/json'}
  })
  const response=await result.json()
  console.log(response);
  if(response){
    setGroupsOfAdmin((prevGroups)=>{
      return [...prevGroups,response]
    })
  }
}
const joinGroupAsAdmin=async ({groupId})=>{
  const result=await fetch('http://localhost:4000/join-gorup-as-admin',{
    method: 'POST',credentials:'include',body:JSON.stringify({groupId}),headers: {'Content-Type': 'application/json'}
  })
  const response=await result.json()
  if(response){
    setGroupsOfAdmin((prevGroups)=>{
      return [...prevGroups,response]
    })
  }

}
const addStudentToGroup =async ({studentId,groupId}) => {
const result = await fetch('http://localhost:4000/add-student-to-group',{method: 'POST',
  credentials:'include',headers:{'Content-Type':'application/json'},body:{ studentId,groupId }
})
};

const getStudentsOfGroup =async (groupId) => {
  const result=await fetch('http://localhost:4000/get-students-of-group',{credentials:'include'})
  const response=await result.json();
  if(response.length > 0) {
        setSelectedGroupForQuiz(response)
  }
};


  return (
    <AdminContext.Provider value={{groupsOfAdmin,createGroup,joinGroupAsAdmin,getGroupsOfAdmin,studentList,getStudentList,addStudentToGroup}}>
      {children}
    </AdminContext.Provider>
  )

}

export default AdminContextProvider