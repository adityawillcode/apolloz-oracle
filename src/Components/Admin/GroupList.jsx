import React from 'react'

function GroupList() {
  return (
    <div className='w-[15rem] border-l border-gray-600 h-full rounded-r-lg bg-gray-300/20  pt-4 ' style={{fontFamily:'Arial'}}>
      <span className='px-3 font-semibold text-[1.3rem] text-white' style={{fontFamily:"Nunito"}}>Students</span>
      <hr />
        <ul className='overflow-y-auto h-[430px] hide-scrollbar flex  flex-col'>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center hover:text-black  transition-all duration-75'>name </li>
        </ul>
    </div>
  )
}

export default GroupList