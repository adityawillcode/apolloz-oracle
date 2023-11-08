import React from 'react'
import { BsLayoutSidebarInset } from 'react-icons/bs'
import { AnimatePresence ,motion} from 'framer-motion'
function LeftSidebar({setLeftSidebarOpen,leftSidebarOpen}) {
  return (
   <AnimatePresence>
     {leftSidebarOpen && <motion.div transition={{duration:'0.1'}} initial={{x:'-15rem'}} animate={{x:'0rem'}} exit={{x:'-15rem'}} className='pt-[1rem] w-[15rem] bg-[#202123]  shadow-[inset_-12px_-8px_40px_#46464620]  fixed bottom-0 top-[3rem] border-r border-black'>
        <BsLayoutSidebarInset size={22} className='text-gray-400 absolute right-[1rem] flex justify-end hover:text-white' onClick={()=>{setLeftSidebarOpen(false)}}/>
    </motion.div>}
   </AnimatePresence>
  )
}

export default LeftSidebar