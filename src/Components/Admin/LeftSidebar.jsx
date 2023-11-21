import React, { useState } from 'react'
import { BsLayoutSidebarInset } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence ,motion} from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'
import { useAdminContext } from '../../Context/AdminContext'


function LeftSidebar({setLeftSidebarOpen,leftSidebarOpen,setSelectedGroup,selectedGroup}) {
const [addGroupName,setAddGroupName]=useState({open:false,name:''})
const {createGroup,joinGroupAsAdmin}=useAdminContext()
const groups=[{groupName:'g1',_id:'a'},{groupName:'g2',_id:'b'},{groupName:'g3',_id:'c'},{groupName:'g4',_id:'d'},{groupName:'g5',_id:'e'}]
const handleSelectGroup = (group) => {
  if(selectedGroup.groupName==group.groupName){
    setSelectedGroup({})
  }
  else{
    setSelectedGroup(group)
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


const navigate=useNavigate()
  return (
 <>
   <AnimatePresence>
     {leftSidebarOpen && 
     <motion.div transition={{duration:'0.1'}} initial={{x:'-15rem'}} animate={{x:'0rem'}} exit={{x:'-15rem'}} className='left-sidebar pt-[1rem] w-[15rem] bg-black/40 fixed bottom-0 top-[3rem] shadow-[inset_-12px_-8px_40px_#46464620]  border-r border-gray-400' >
      <BsLayoutSidebarInset size={22} className='text-gray-400  absolute right-[1rem] hover:text-white' onClick={()=>{setLeftSidebarOpen(false)}}/>
  <div className='h-full flex flex-col'>
  <div className=' mt-[2rem] border-t border-gray-600 py-[1rem]   border-b'>
  <div className='flex items-center justify-between h-[2rem] px-5'>  <span className=' text-gray-300 '>Groups </span><span><IoIosAddCircle className='text-gray-400 cursor-pointer' size={22} onClick={()=>{setAddGroupName({open:!addGroupName.open})}} /></span></div>
 <AnimatePresence>
 {addGroupName.open && 
 <motion.div initial={{x:'-100%'}} animate={{x:'0'}} exit={{x:'-100%'}}  transition={{duration:'0.2'}}> 
 <div className='w-full  h-[2.6rem]  border-y border-gray-500  flex items-center bg-black px-2'>
  <input type="text" className=' bg-transparent w-full h-full pb-1 outline-none px-2 text-gray-300 placeholder:text-gray-400' placeholder='Group Name' onChange={(e)=>{setAddGroupName({...addGroupName,name:e.target.value})}} /></div>
 <div className='text-gray-300 flex w-full  justify-center border-b border-gray-600 h-[3rem] gap-6 items-center '> 
 <button className='text-gray-300 bg-transparent border border-gray-400 rounded-md px-2 py-1' onClick={()=>{setAddGroupName({open:false})}}>Cancel</button> 
 <button className='text-gray-300 bg-transparent border  border-gray-400  rounded-md px-2 py-1'  onClick={handleCreateGroupClick}>Create</button>
  <button className='text-gray-300 bg-transparent border  border-gray-400 rounded-md px-2 py-1' onClick={handleJoinGroupAsAdmin}>Join</button></div></motion.div>}
  </AnimatePresence> 
   <ul className='pl-[1rem] text-gray-400'>
    {
      groups.map((group,index)=>{
        return(
          <li key={index} className={`hover:bg-white/70 hover:text-black pl-4 rounded-sm cursor-pointer ${selectedGroup.groupName===group.groupName?'bg-gray-300 text-black':''}`} onClick={()=>{handleSelectGroup(group)}}>{group.groupName}</li>

        )
      })
    }
    

   </ul>
    </div>
    <div className='pt-[1rem] flex flex-col w-full px-[0.7rem]'>
    <button className='border-[1px] text-gray-200  py-[5px] rounded-md border-gray-400 hover:border-gray-300 hover:text-gray-300 flex justify-center items-center' onClick={()=>{navigate('/admin/dashboard/create-quiz')}}>Generate a quiz <FaArrowRight className='ml-5 '/></button>
    </div>
  </div>
  </motion.div>}
   </AnimatePresence>

 </>
  )
}

export default LeftSidebar