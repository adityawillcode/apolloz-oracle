import React from 'react'

function GroupList() {
  return (
    <div className='w-[15rem] h-full rounded-r-lg bg-gray-100 pt-4 ' style={{fontFamily:'Arial'}}>
      <span className='px-3 font-semibold text-[1.3rem] text-gray-600' style={{fontFamily:"Nunito"}}>Students</span>
      <hr />
        <ul className='overflow-y-auto h-[430px] hide-scrollbar flex  flex-col'>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
            <li className='h-[2rem] p-[1.6rem] hover:bg-gray-200 flex items-center  transition-all duration-75'>name </li>
        </ul>
    </div>
  )
}

export default GroupList