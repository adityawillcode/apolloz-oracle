import { AnimatePresence,motion } from 'framer-motion'
import React, { useState } from 'react'
import {RxCross1} from 'react-icons/rx'
import {IoIosSearch} from 'react-icons/io'
function RightSidebar({selectedGroup,setSelectedGroup}) {
const [addStudent,setAddStudent]=useState({addStudentInput:false,name:''})
const [searchStudent,setSearchStudent]=useState('')
  const handleClick = () => {
    setAddStudent({addStudentInput:!addStudent.addStudentInput})
  };
  
  return (
    <>
    <AnimatePresence>
      {selectedGroup.groupName && 
      <motion.div transition={{duration:'0.1'}} initial={{x:'15rem'}} animate={{x:'0rem'}} exit={{x:'15rem'}} className=' w-[15rem] right-0 bg-black/40 fixed bottom-0 top-[3rem] shadow-[inset_-12px_-8px_40px_#46464620]  border-l border-gray-400' >
    <div className='h-[3rem] w-full text-gray-300 pl-5  border-b-[1px] flex items-center border-gray-500 justify-between'> <RxCross1 className=' cursor-pointer' onClick={()=>{setSelectedGroup({})}} size={22}/>
    {addStudent.addStudentInput ? 
    <button className='border border-white text-white text-[0.7rem] rounded-md bg-transparent hover:bg-white hover:text-black transition-all duration-75 px-2 py-1' style={{fontFamily:'Nunito'}} onClick={handleClick}>Search</button>:
     <button className='border border-white text-white text-[0.7rem] rounded-md bg-transparent hover:bg-white hover:text-black transition-all duration-75 px-2 py-1' style={{fontFamily:'Nunito'}} onClick={handleClick}>Add Student</button>}
      </div>
    <div className='w-full  h-[3rem]  border-b border-gray-400  flex items-center bg-black px-2'><IoIosSearch className='text-gray-400' size={20} /> 
<AnimatePresence> {addStudent.addStudentInput &&
 < motion.div   initial={{x:"-100%",opacity:0}}  animate={{x:'0',opacity:1}} exit={{x:'100%',opacity:0}} transition={{duration:'0.3'}} > <input  value={addStudent.name} onChange={(e)=>{setAddStudent({...addStudent,name:e.target.value})}} type="text" className=' bg-transparent w-full h-full pb-1 outline-none px-2 text-gray-300 placeholder:text-gray-400' placeholder='Search New Student' /> </motion.div>
}
</AnimatePresence>
<AnimatePresence>{!addStudent.addStudentInput &&
    < motion.div  initial={{x:"-100%",opacity:0}}  animate={{x:'0',opacity:1}} exit={{x:'100%',opacity:0}} transition={{duration:'0.3'}}   >   <input onChange={(e)=>{setSearchStudent(e.target.value)}} value={searchStudent}  type="text" className=' bg-transparent w-full h-full pb-1 outline-none px-2 text-gray-300 placeholder:text-gray-400' placeholder='Search student' /></motion.div>
    }
    </AnimatePresence>


    </div>
  
   </motion.div>}
    </AnimatePresence>
 
  </>
  )
}

export default RightSidebar