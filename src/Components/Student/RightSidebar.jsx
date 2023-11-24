import React, { useState } from 'react'
import { BsLayoutSidebarInset } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence ,motion} from 'framer-motion'
import { useStudentContext } from '../../Context/StudentContext'

function RightSidebar({setNotificationPanelOpen,notificationPanelOpen}) {

const navigate=useNavigate()
const {allQuizes}=useStudentContext()

const takeQuiz = (quizId,quizDbId) => {
  window.open(window.location.origin+`/student/quiz/${quizDbId}/${quizId}`)
};

  return (
 <>
   <AnimatePresence>
     {notificationPanelOpen && <motion.div transition={{duration:'0.1'}} initial={{x:'15rem'}} animate={{x:'0rem'}} exit={{x:'15rem'}} className=' select-none pt-[1rem] w-[15rem] bg-black/40 right-0 fixed bottom-0 top-[3rem] shadow-[inset_-12px_-8px_40px_#46464620]  border-l border-gray-500'>
<div  className='px-[1rem] w-full flex justify-between border-b-[1px] border-gray-500 h-[2.3rem]  text-gray-400 select-none ' style={{fontFamily:'Nunito'}}  > <BsLayoutSidebarInset size={22} className='inline-block  hover:text-white' onClick={()=>{setNotificationPanelOpen(false)}}/> <span>Notifications</span></div>
  {allQuizes.length>0 ? 
  <div className=' flex flex-col px-3 py-3  gap-3 hide-scrollbar h-full pb-[2rem]' style={{overflowY:'scroll' }} >
    {
      allQuizes.map((quiz,index)=>{
        return (
          <div key={index} className=' text-gray-400 border border-gray-400 hover:border-gray-200  hover:text-gray-200 flex flex-col px-2 pt-6 pb-2 relative rounded-md cursor-pointer ' onClick={()=>{takeQuiz(quiz.quizId,quiz._id)}}>   
           <span className=' flex right-2 top-1  items-center absolute text-[10px] '>{quiz.date}</span>
           <span className='flex gap-2'><span style={{fontFamily:'monospace'}} className='text-gray-200'>Topic:</span><span className=' font-sans text-[12px] '>{quiz.topic}</span></span>
           <span className='flex gap-2'><span style={{fontFamily:'monospace'}} className='text-gray-200'>Dration:</span><span className=' font-sans text-[12px] '>{quiz.duration} min</span></span>
           <span className='flex gap-2'><span style={{fontFamily:'monospace'}} className='text-gray-200'>Marks:</span><span className=' font-sans text-[12px] '>{quiz.numberOfQuestions * 2}</span></span>
        
          </div>
        )
      })
    }
  </div>: 
  <div className='h-full flex justify-center pt-[10rem] text-[15px] font-sans font-bold text-gray-400'>No Notifications Right now </div> }
  </motion.div>}
   </AnimatePresence>

 </>
  )
}

export default RightSidebar