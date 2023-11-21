import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'
import GroupList from './GroupList'
import { useQuizContext } from '../../Context/QuizContext'
import { useAdminContext } from '../../Context/AdminContext'
import Questions from './Questions'
// ... (other imports and components)

function CreateQuiz() {
  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    groupData: {},
    category: '',
    type: 'multiple',
    difficulty: '',
    date: '2023-11-22',
    amount: 10,
    duration: 30,
  });
  const { groupsOfAdmin } = useAdminContext();
  const { createQuiz, setQuiz , newQuiz ,setNewQuiz} = useQuizContext();

  const categories=[
    'General Knowledge','Celebrities','Animals','Sports','History','Science Mathematics','Science Computers','Music'
  
  ]
  const difficulty = ['easy', 'medium', 'hard'];

  const handleAutoGenerate = () => {
    createQuiz(formData)
};
const handleSubmit = () => {
  setQuiz()
};




  return (
    <div className='flex justify-center pl-[1rem] items-center h-[100vh] wave-bg select-none'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=''
        className='w-[40rem] h-[30rem]  shadow-[5px_5px_30px_5px_#00000024] flex flex-col text-white justify-between border-black py-[2rem] bg-gray-300/20 px-[1rem] relative '
      >
        <div className='flex gap-5 flex-col' style={{ fontFamily: 'Nunito' }}>
          <div className='flex gap-8'>
            <span>For group</span>
            <select
  value={formData.groupData.groupName || 'default'}
  onChange={(e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const selectedGroup = {
      groupName: selectedOption.textContent,
      groupId: selectedOption.value
    };
    setFormData({ ...formData, groupData: selectedGroup });
  }}
  className='bg-transparent text-white p-[5px] outline-none border-gray-400 border w-[7rem] rounded-md'
>
  <option value='default' disabled>
    select group
  </option>
  <option value='groupId1'>Group 1</option>
  <option value='groupId2'>Group 2</option>
  <option value='groupId3'>Group 3</option>
  <option value='groupId4'>Group 4</option>
</select>
          </div>
          <div className='flex gap-8'>
            <span>Topic</span>
            <select
              name=''
              id=''
              value={formData.category}
              onChange={(e) => {
                const selectedCategory = e.target.value;
                setFormData({ ...formData, category: selectedCategory });
             
              }}
              className='outline-none border-gray-400 border rounded-md bg-transparent text-white p-[5px]'
            >
              <option value='any topic'>select topic</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className='flex gap-8'>
            <span>Type</span>
            <select
              name=''
              id=''
              value={formData.type}
              onChange={(e) => {
                const selectedType = e.target.value;
                setFormData({ ...formData, type: selectedType });
              }}
              className='outline-none border-gray-400 border rounded-md bg-transparent text-white p-[5px]'
            >
              <option value='multiple'>MCQ</option>
              <option value='boolean'>TRUE/FALSE</option>
            </select>
          </div>
          {/* <div className='flex gap-8'>
            <span>Difficulty</span>
            <select
              name=''
              id=''
              value={formData.difficulty}
              onChange={(e) => {
                const selectedDifficulty = e.target.value;
                setFormData({ ...formData, difficulty: selectedDifficulty });
              }}
              className='outline-none border-gray-400 border rounded-md bg-transparent text-white p-[5px]'
            >
              <option value='any difficulty'>any difficulty</option>
              {difficulty.map((med) => (
                <option key={med} value={med}>
                  {med}
                </option>
              ))}
            </select>
          </div> */}
          <div className='flex gap-8'>
            <span>Number of Questions</span>
            <input
              value={formData.amount}
              onChange={(e) => {
                setFormData({ ...formData, amount: e.target.value });
              }}
              type='number'
              placeholder='Number of questions'
              className='placeholder:text-white outline-none border-gray-400 border rounded-md bg-transparent text-white p-[5px] w-[12rem]'
            />
          </div>
          <div className='flex gap-8'>
            <span>duration</span>
            <input
              value={formData.duration}
              onChange={(e) => {
                setFormData({ ...formData, duration: e.target.value });
              }}
              type='number'
              placeholder='Duration'
              className='placeholder:text-white outline-none border-gray-400 border w-[8rem] rounded-md bg-transparent text-white p-[5px]'
            />
          </div>
          <div className='flex gap-5'>
            <span>Date</span>
            <input value={formData.date} onChange={(e)=>{setFormData({...formData,date:e.target.value});console.log(e.target.value);}} type="date" className='text-white bg-transparent outline-none border border-gray-400 h-8 rounded-md px-2 py-2 ' />
          </div>
        </div>
        <div className='flex gap-3 w-fulll justify-end '>
          <button
            className='bg-red-500 text-white rounded px-2 font-semibold border-2 hover:bg-red-600 border-red-300 py-1 transition-all duration-75'
            onClick={() => {
              navigate('/admin/dashboard');
            }}
          >
            Cancel
          </button>
          <button
            className='rounded px-2 border-[1px] text-white border-white hover:bg-white/30 py-1 transition-all duration-75 hover:text-white hover:bg-black'
            onClick={handleAutoGenerate}
          >
           {newQuiz.questions.length>0?'Regenerate Quiz':' Auto Generate'}
          </button>
          <button
            className='bg-black border border-white text-white rounded px-2 font-semibold py-1 transition-all duration-75' onClick={handleSubmit}
          >
            Done
          </button>
        </div>
       <AnimatePresence>
       {formData.groupData.groupName && (
          <motion.div initial={{x:'-15rem',opacity:0}} animate={{x:'0',opacity:1}} exit={{x:'-15rem',opacity:1}} transition={{duration:0.2}} className='absolute right-[-15rem] top-0 h-full'>
            <GroupList />
          </motion.div>
        )}
       </AnimatePresence>
       <AnimatePresence>
       {newQuiz['questions'].length>0 && (
          <motion.div initial={{x:'-50rem',opacity:0}} animate={{x:'0',opacity:1}} exit={{x:'-50rem',opacity:0}} transition={{duration:0.2}} className='absolute left-[-17rem] w-[17rem] top-0 h-full'>
            <Questions newQuiz={newQuiz} />
          </motion.div>
        )}
       </AnimatePresence>
      </form>
    </div>
  );
}

export default CreateQuiz
