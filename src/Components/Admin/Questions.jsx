import React from 'react'

function Questions({newQuiz}) {
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  return (
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap'}}  className=' px-2 hide-scrollbar  pt-[1rem]  w-full h-full bg-slate-800 text-white fixed bottom-0 rounded-l-sm  shadow-[inset_-12px_-8px_40px_#46464620]  border-l border-t border-gray-600 '>
     <div className='relative pt-[3rem] w-[17rem]'>
     <h1 className='  text-center top-0 flex items-center  fixed h-[3rem] bg-black/20 shadow-md shadow-gray-500 right-0 left-0 w-full '><span style={{fontFamily:'Nunito'}} className=' w-[100%]'>Questions</span></h1>
<div className='flex flex-col gap-5'>
{
      newQuiz.questions.map((element,index)=>{
      const options=shuffleArray([...element['incorrect_answers'],element["correct_answer"]])
        return(
          <div key={index} className='border-b border-gray-500 py-3 flex flex-col gap-2' >
         <div style={{fontFamily:'kdam Thmor Pro'}}>   <span>Q.{index+1}</span><p className='text-white' >{element["question"]}</p></div>
         <div className='flex gap-2 flex-col'>
          {
            options.map((option,index)=>{
              return (
                <div key={index} className='text-gray-400 hover:bg-black/90 py-1 px-1 flex gap-3' style={{fontFamily:'Kdam Thmor Pro'}}> <span>{index+1}.</span> <span>{option}</span></div>
              )
            })
          }
         </div>
            
          </div>
        )
      })
    }
</div>

     </div>
    </div>
  )
}

export default Questions