import React,{createContext,useContext,useEffect,useState} from 'react'

const StudentContext=createContext()
export const useStudentContext = () => {
    return useContext(StudentContext)
};
function StudentContextProvider({children}) {

const groupOfStudent=async (studentId) => {
  const result = await fetch(`/student-groups${studentId?`?studentId=${studentId}`:''}`)
  const response=await result.json()
};

    

  return(
    <StudentContext.Provider>
    {children}
</StudentContext.Provider>
  )

}

export default StudentContextProvider