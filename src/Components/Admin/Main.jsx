import React from 'react'

function Main() {
  return (
    <div className='w-screen h-screen flex justify-center'>
        <div className=' w-[45rem] border-x-2  border-gray-700 text-gray-400 pt-[2rem] px-4'>
        <h1 className='text-[2rem]  font-semibold border-b-[2px] border-gray-700 ' style={{fontFamily:'Nunito'}}>Recent Quizes</h1>
        <div className='w-full h-full pt-[1rem] flex flex-col  overflow-y-auto pb-[7rem] hide-scrollbar  gap-4'>
            <div className='border-2 border-gray-600 w-full rounded-lg flex flex-col px-4 py-4 text-gray-300 hover:border-gray-400 cursor-pointer'> 
                <span>Topic</span>
                <span>date</span>
                <span>Group</span>
                <span>Total Students</span>
                <span>Total Questions</span>
                <span className='w-full flex justify-end'>quiz id</span>
            </div>
            <div className='border-2 border-gray-500 w-full rounded-lg flex flex-col px-4 py-4 text-gray-300 hover:border-gray-400'> 
                <span>Topic</span>
                <span>date</span>
                <span>Group</span>
                <span>Total Students</span>
                <span>Total Questions</span>
                <span className='w-full flex justify-end'>quiz id</span>
            </div>
            <div className='border-2 border-gray-500 w-full rounded-lg flex flex-col px-4 py-4 text-gray-300 hover:border-gray-400'> 
                <span>Topic</span>
                <span>date</span>
                <span>Group</span>
                <span>Total Students</span>
                <span>Total Questions</span>
                <span className='w-full flex justify-end'>quiz id</span>
            </div>
            <div className='border-2 border-gray-500 w-full rounded-lg flex flex-col px-4 py-4 text-gray-300 hover:border-gray-400'> 
                <span>Topic</span>
                <span>date</span>
                <span>Group</span>
                <span>Total Students</span>
                <span>Total Questions</span>
                <span className='w-full flex justify-end'>quiz id</span>
            </div>
            <div className='border-2 border-gray-500 w-full rounded-lg flex flex-col px-4 py-4 text-gray-300 hover:border-gray-400'> 
                <span>Topic</span>
                <span>date</span>
                <span>Group</span>
                <span>Total Students</span>
                <span>Total Questions</span>
                <span className='w-full flex justify-end'>quiz id</span>
            </div>
            <div className='border-2 border-gray-500 w-full rounded-lg flex flex-col px-4 py-4 text-gray-300 hover:border-gray-400'> 
                <span>Topic</span>
                <span>date</span>
                <span>Group</span>
                <span>Total Students</span>
                <span>Total Questions</span>
                <span className='w-full flex justify-end'>quiz id</span>
            </div>
            
        </div>

        </div>
    </div>
  )
}

export default Main