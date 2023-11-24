import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import {RxCross1} from 'react-icons/rx'
function SelectedGroupData({selectedGroup,setSelectedGroup}) {
  return (
   <AnimatePresence>
     { selectedGroup.groupName &&
      <motion.div initial={{x:'100%'}} animate={{x:'0'}} exit={{x:'100%'}} transition={{duration:0.1}} className='bg-black/40   py-[1rem] px-4 fixed right-0 top-[3rem] bottom-0 left-[16rem] border-l-[1px] border-gray-400 '> 
      <div className='w-full flex relative justify-center'> <RxCross1 size={22} className='text-gray-300 hover:text-white cursor-pointer absolute left-0 ' onClick={()=>{setSelectedGroup({})}}/> <span style={{fontFamily:'Nunito'}} className='text-gray-300'>{selectedGroup.groupName}</span> </div>
      
       
     </motion.div>
    
    }

   </AnimatePresence>
  )
}

export default SelectedGroupData