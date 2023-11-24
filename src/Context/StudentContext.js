import React,{createContext,useContext,useEffect,useState} from 'react'

const StudentContext=createContext()
export const useStudentContext = () => {
    return useContext(StudentContext)
};
function StudentContextProvider({children}) {
const [groupsOfStudent,setGroupsOfStudent]=useState([])
const [allQuizes,setAllQuizes]=useState([])

const getGroupsOfStudent=async (studentId) => {
  const result = await fetch(`http://localhost:4000/student-groups${studentId?`?studentId=${studentId}`:''}`,{credentials:'include'})
  const response=await result.json() 
  if(!response.error){
    setGroupsOfStudent(response)
  }
};

const joinGroupAsStudent =async (groupId) => {
  const result=await fetch('http://localhost:4000/join-group-as-student',{
method: 'POST',credentials:'include',body:JSON.stringify({groupId}),headers: {'Content-Type': 'application/json'}
})
const response=await result.json()
if(response.groupName){
  setGroupsOfStudent((prevGroups)=>{
    return [...prevGroups,response]
  })
}
}
    
const getAllQuizes= async () => {
  const result=await fetch('http://localhost:4000/get-quizes-of-student',{credentials:'include'})
  const response=await result.json()
  if(response.length>0){
    console.log(response);
    setAllQuizes(response)
  }
};

useEffect(()=>{
  getAllQuizes()
},[])

  return(
    <StudentContext.Provider value={{joinGroupAsStudent,groupsOfStudent,getGroupsOfStudent,allQuizes}}>
    {children}
</StudentContext.Provider>
  )

}

export default StudentContextProvider