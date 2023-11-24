import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'
function QuizPage() {
  const [allowQuiz,setAllowQuiz]=useState(false)
  return (
    <div className='animated-bg h-screen w-screen flex justify-center '>
      <div className='w-[50rem] h-screen border-white/20 relative border'>
      <AnimatePresence>
      {
        !allowQuiz && 
        <motion.div initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} transition={{duration:0.2}} className='absolute right-[2rem] top-[2rem] bottom-[2rem] left-[2rem]  bg-white/20 select-none  shadow-[0px_0px_10px_0px_#ffffff] '>
          <div className='relative select-none w-full h-full px-5'>
            <h1 className='text-[2rem]  font-bold  w-full text-center text-gray-300 py-3' style={{fontFamily:'Kdam Thmor Pro'}}>Instructions</h1>
          <ul className='flex flex-col gap-4 text-[1.2rem] text-white font-mono'>
            <li>All Questions Are Compulsory</li>
            <li>Each Question is of 2 marks</li>
            <li>Quiz Will Be auto submitted after Time is Over ,so Keep Track Of The Time</li>
            <li>Type of the Questions is Multiple Choice Questions</li>
          </ul>
          <div className='flex gap-3 absolute bottom-4 right-5'>
            <button className='px-3 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md font-bold' onClick={()=>{window.close()}}>Cancel</button>
          <button className='px-3 py-2 text-white bg-green-600 hover:bg-green-700 rounded-md font-bold' onClick={()=>{setAllowQuiz(true)}}>Start Quiz</button>
          </div>
          </div>
        </motion.div>
      }
      </AnimatePresence>

        </div>
    </div>
  )
}

export default QuizPage