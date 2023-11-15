import React,{createContext,useContext,useEffect,useState} from 'react'

const AdminContext=createContext()
export const useAdminContext = () => {
    return useContext(AdminContext)
};


function AdminContextProvider({children}) {
    
    

  return(
    <AdminContext.Provider>
    {children}
</AdminContext.Provider>
  )

}

export default AdminContextProvider