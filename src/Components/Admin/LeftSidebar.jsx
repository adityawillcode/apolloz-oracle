import React, { useEffect, useState } from 'react'
import { BsLayoutSidebarInset } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence ,motion} from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'
import { useAdminContext } from '../../Context/AdminContext'


function LeftSidebar({setLeftSidebarOpen,leftSidebarOpen,setSelectedGroup,selectedGroup}) {
const [addGroupName,setAddGroupName]=useState({open:false,name:''})
const {createGroup,joinGroupAsAdmin,groupsOfAdmin,getGroupsOfAdmin,getStudentList}=useAdminContext()
const handleSelectGroup = (group) => {
  if(selectedGroup.groupName==group.groupName){
    setSelectedGroup({})
  }
  else{
    setSelectedGroup(group)
    getStudentList(group.groupId)
  }
};
const handleCreateGroupClick = () => {
  createGroup(addGroupName.name)
  setAddGroupName({open:false})

};
const handleJoinGroupAsAdmin = (groupId) => {

  joinGroupAsAdmin(groupId)
  setAddGroupName({open:false})

};

const hasCharactersOtherThanSpaces = (inputString) => {
  let trimmedString=inputString
  if(inputString.length>0){
  trimmedString = inputString.trim()
 }  
  return trimmedString.length > 0;
};


useEffect(()=>{
  getGroupsOfAdmin()
},[])

const navigate=useNavigate()
  return (
 <>
   <AnimatePresence>
     {leftSidebarOpen && 
     <motion.div transition={{duration:'0.1'}} initial={{x:'-15rem'}} animate={{x:'0rem'}} exit={{x:'-15rem'}} className='left-sidebar pt-[1rem] w-[15rem] bg-black/40 fixed bottom-0 top-[3rem] shadow-[inset_-12px_-8px_40px_#46464620]  border-r border-gray-500' >
     <BsLayoutSidebarInset size={22} className='text-gray-400  absolute right-[1rem] hover:text-white' onClick={()=>{setLeftSidebarOpen(false)}}/>
  <div className='h-full flex flex-col'>
  <div className=' mt-[2rem] border-t border-gray-500  py-3'>
  <div className='flex items-center justify-between h-[2rem] px-5 mb-4'>  <span className=' text-gray-300  '>Groups </span><span><IoIosAddCircle className='text-gray-400 cursor-pointer' size={22} onClick={()=>{setAddGroupName({open:!addGroupName.open})}} /></span></div>
 <AnimatePresence>
 {addGroupName.open && 
 <motion.div initial={{x:'-100%'}} animate={{x:'0'}} exit={{x:'-100%'}}  transition={{duration:'0.2'}}> 
 <div className='w-full py-3  border-y border-gray-500  flex items-center bg-black px-2'>
  <input type="text" autoFocus className=' bg-transparent w-full h-full  outline-none px-2 text-gray-300 placeholder:text-gray-400' placeholder='Group Name' onChange={(e)=>{setAddGroupName({...addGroupName,name:e.target.value})}} />
  </div>
 <div className='text-gray-300 flex w-full  justify-center py-2 gap-6 items-center '> 
 <button className='text-gray-300 bg-transparent border border-gray-400 rounded-md px-2 py-1' onClick={()=>{setAddGroupName({open:false})}}>Cancel</button> 
 <button className='text-gray-300 bg-transparent border  border-gray-400  rounded-md px-2 py-1'  onClick={handleCreateGroupClick}>Create</button>
  <button className='text-gray-300 bg-transparent border  border-gray-400 rounded-md px-2 py-1' onClick={handleJoinGroupAsAdmin}>Join</button>
  </div></motion.div>}
  </AnimatePresence> 
  {
    groupsOfAdmin.length >0 ? <ul className=' text-gray-400 border-t border-gray-500 pt-4 '>
    {
      groupsOfAdmin.map((group,index)=>{
        return(
          <li key={index} style={{fontFamily:'Carrois Gothic'}} className={`hover:bg-white/60 hover:text-black border-y border-gray-600 pl-6 rounded-sm transition-all duration-100 cursor-pointer py-2 text-lg ${selectedGroup.groupName===group.groupName?'bg-white/40 text-white':''}`} onClick={()=>{handleSelectGroup(group)}}>{group.groupName}</li>
        )
      })
    }
   </ul>: !addGroupName.open &&
   <div className='w-full flex justify-center items-center h-full  font-bold text-[0.8rem] bg-transparent text-gray-400 border-t border-gray-500 pb-[1rem]'>Join Group Or Create Group</div>
  }
    </div>
    <div className=' flex flex-col w-full h-full bg-transparent px-[0.7rem] border-t border-gray-500 pt-[1.3rem]  '>
    <button className='border-[1px] text-gray-200  py-[5px] rounded-md border-gray-400 hover:bg-white transition-all duration-100 hover:text-blue-900 flex justify-center items-center' onClick={()=>{navigate('/admin/dashboard/create-quiz')}}>Generate a quiz <FaArrowRight className='ml-5 '/></button>
    </div>
  </div>
  </motion.div>}
   </AnimatePresence>

 </>
  )
}

export default LeftSidebar