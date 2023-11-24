import React,{createContext,useContext,useEffect,useState} from 'react'
import { v4 as uuid } from 'uuid';
import gkQuiz from '../Quizes/gk.json'
import animalQuiz from '../Quizes/animalQuiz.json'
import sportsQuiz from '../Quizes/sportsQuiz.json'
import historyQuiz from '../Quizes/historyQuiz.json'
import mathsQuiz from '../Quizes/mathsQuiz.json'
import musicQuiz from '../Quizes/musicQuiz.json'
import computerQuiz from '../Quizes/computerQuiz.json'

const QuizContext=createContext()

export const useQuizContext = () => {
    return useContext(QuizContext)
};


function QuizContextProvider({children}) {
  const categories={
    'General Knowledge':gkQuiz,'Animals':animalQuiz,'Sports':sportsQuiz,'History':historyQuiz,'Science Mathematics':mathsQuiz,'Science Computers':computerQuiz,'Music':musicQuiz
}

// import quiz questions from json file

  const [newQuiz,setNewQuiz]=useState({questions:[],groupData:{},duration:30,date:''})  // quiz data=groupData ,category,type,difficulty,amount,duration,adminData,

  // create quiz using external json file
const createQuiz = (formData) => {
  let  {amount,category,type,duration,groupData,date}=formData
  const randomQuestions=getRandomElements(categories[category][type]['results'],amount)
  setNewQuiz({questions:[...randomQuestions],groupData,duration,date,topic:category})
};


  // send quiz to server
  const setQuiz =async () => { // we will have adminData from req.user object
    
    const quizId=uuid()
    const result=await fetch('http://localhost:4000/create-quiz',{credentials:'include',
      method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify({newQuiz:{...newQuiz},quizId})
    })
    const response=await result.json()
    if(response){
      window.open('http://localhost:3000',"_self")
    }
    else{
      alert("cant create quiz right now please try again")
    }
  }
  
function getRandomElements(questions, amount) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions.slice(0, amount);
}    
    



    

  return(
    <QuizContext.Provider value={{createQuiz,newQuiz,setNewQuiz,setQuiz}}>
    {children}
</QuizContext.Provider>
  )

}

export default QuizContextProvider