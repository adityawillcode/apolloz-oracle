import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GroupList from './GroupList'

function CreateQuiz() {
const navigate=useNavigate()
const [group,setGroup]=useState('')
   
  return (
    <div className=' flex justify-center items-center h-[100vh]'>
        <form onSubmit={(e)=>{e.preventDefault()}} action="" className='w-[40rem] h-[30rem]  rounded-l-lg shadow-[5px_5px_30px_5px_#00000024] flex flex-col justify-between border-black py-[2rem] px-[1rem] relative'>
            <div className='flex gap-5 flex-col'  style={{fontFamily:'Nunito'}}>
            <div className='flex gap-8'  >
                <span>For group</span>
                <select onChange={(e)=>{setGroup(e.target.value);}} name="" id="" className='outline-none border-gray-400 border'>
                <option value="group1">Group 1</option>
                <option value="group2">group 2</option>
                <option value="group3">Group 3</option>
                <option value="group4">Group 4</option>
               </select>
               </div>
            <div className='flex gap-8' >
                <span>Topic</span>
                <select name="" id="" className='outline-none border-gray-400 border'>
                <option value="">Math</option>
                <option value="">Phhysics </option>
                <option value="">Chemistry</option>
                <option value="">Biology</option>
               </select>
             </div>
            <div className='flex gap-8' >
                <span>Type</span>
                <select name="" id="" className='outline-none border-gray-400 border'>
                <option value="">MCQ</option>
                <option value="">TRUE/FALSE </option>
               </select>
             </div>
            <div className='flex gap-8' >
                <span>Difficulty</span>
                <select name="" id="" className='outline-none border-gray-400 border'>
                <option value="">Easy</option>
                <option value="">Medium</option>
                <option value="">Hard</option>
               </select>
             </div>
            <div className='flex gap-8' >
                <span>Number of Questions</span>
                <input type="number" className='outline-none border-gray-400 border w-[3rem]'/>
             </div>
            <div className='flex gap-8' >
                <span>duration</span>
                <input type="number" className='outline-none border-gray-400 border w-[3rem]'/>
             </div>
            </div>
             
           <div className='flex gap-3 w-fulll justify-end'>
            <button className=' bg-red-500 text-white rounded px-2 font-semibold border-2 hover:bg-red-600 border-red-300 py-1 transition-all duration-75' onClick={()=>{navigate('/admin/dashboard')}}>Cancel</button>
            <button className='   rounded px-2  border-[1px] text-black border-black py-1 transition-all duration-75 hover:text-white hover:bg-black'>Auto Genereate</button>
            <button className=' bg-green-500 text-white rounded px-2 font-semibold  hover:bg-green-600 py-1 transition-all duration-75'>Choose From Collection</button>
            </div>
     {group!=='' &&  <div className='absolute right-[-15rem] top-0 h-full'><GroupList/></div>}
        </form>
    </div>
  )
}

export default CreateQuiz