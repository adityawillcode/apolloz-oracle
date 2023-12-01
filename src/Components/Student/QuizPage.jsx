import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'
import { useQuizContext } from '../../Context/QuizContext'
function QuizPage() {
  const {selectedQuiz,setSelectedQuiz,getQuiz}= useQuizContext()

  const {quizId}=useParams()


useEffect(()=>{
  getQuiz(quizId)
},[])

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const [quizData,setQuizData]=useState({})
  const [marks,setMarks]=useState(0)

  const handleSelectOption= (questionIndex,answer) => {

    setQuizData((prevData)=>{
      return {...prevData,[questionIndex]:answer}
    })
  };


  const showResult = () => {
    let newMarks=0
    for(let i =0 ; i<selectedQuiz.quiz.length;i++){
     console.log([quizData[`${i}`],selectedQuiz.quiz[i]['correct_answer']]);
     
      if(quizData[`${i}`]===selectedQuiz.quiz[i]['correct_answer']){
      newMarks++
      }
    }
   setMarks(newMarks)
    
  };

useEffect(()=>{
  console.log(marks);
  
},[marks])  
  
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

        {allowQuiz && <div className='h-screen bg-black/30 w-full text-white py-[3rem] px-[3rem] flex flex-col gap-4 overflow-scroll hide-scrollbar'>
          {
           selectedQuiz.quiz && selectedQuiz.quiz.map((question,questionIndex)=>{
            const options=[question['correct_answer'],...question['incorrect_answers']]
                return(
                  <div className=' flex flex-col gap-3 ' key={questionIndex} >
                    <p className='flex gap-4'><span>Q{questionIndex+1}.</span><span>{question.question}</span></p>
                   <div className='flex flex-col gap-2'>
                    {
                      options.map((option,index)=>{
                        return(
                          <p className={`flex gap-3 px-[1rem] hover:bg-white/40 py-2 cursor-pointer ${quizData[questionIndex]===option ? 'bg-white text-black ':''}`}  onClick={()=>{handleSelectOption(questionIndex,option)}}><span>{index+1}.</span><span>{option}</span></p>
                        )
                      })
                    }
                   </div>
                  </div>
                )
            })
          }
        <div className='bg-green-600 text-white font-bold px-3 py-2 text-center hover:bg-green-700 rounded-lg' onClick={showResult}>Submit</div>
        </div>}
        </div>

    </div>
  )
}

export default QuizPage