import React,{createContext,useContext,useEffect,useState} from 'react'

const StudentContext=createContext()
export const useStudentContext = () => {
    return useContext(StudentContext)
};


function StudentContextProvider({children}) {
    
    

  return(
    <StudentContext.Provider>
    {children}
</StudentContext.Provider>
  )

}

export default StudentContextProvider