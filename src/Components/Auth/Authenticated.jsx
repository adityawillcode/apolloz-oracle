import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
function Authenticated({loginData}) {
    const navigate=useNavigate()
  return (
    <div className='h-[20rem] auth-box w-[25rem] p-[1rem] border-[2px] rounded-lg flex justify-center items-center flex-col border-gray-500 bg-white/20 select-none  shadow-[0px_0px_10px_0px_#ffffff] '>
       <div className='flex-grow'>{loginData.name}</div>
       <div className='h-[25px] flex w-full justify-end'>
        <button className=' border border-gray-200 px-3 py-2 flex justify-center items-center rounded-sm hover:bg-white/10' onClick={()=>{navigate('/')}} >Next<FaArrowRight size={12} className='ml-2' /> </button>
       </div>
      </div>
  )
}

export default Authenticated