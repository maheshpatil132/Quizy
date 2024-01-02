import React from 'react'
import Header from '../Layout/Header/Header'
import { Plus, CheckCircle, MoreVertical, Link } from 'lucide-react'

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <div className=' px-12 py-7 grid grid-cols-5 gap-6'>
        <div className=' cursor-pointer rounded-xl px-6 py-5 flex items-center justify-center gap-4 flex-col h-56 hover:scale-105 transition-all hover:bg-gray-800 bg-gray-900 text-white'>
          <Plus size={'34px'} />
          <h3 className=' text-xl'>Create Quiz</h3>
        </div>


        <div className=' rounded-xl px-6 py-5 flex items-center justify-center gap-4 flex-col h-56 hover:scale-105 transition-all bg-white border shadow-sm'>
          <div className=' w-full'>
            <div className=' w-fit text-xs text-gray-700 flex gap-4 items-center bg-gray-200 px-2 rounded-lg py-1'>
              <Link size={'14px'} />
              <h3>Quiz Link</h3>
            </div>
          </div>
          <div className='w-full'>
            <h1 className=' text-lg'>New Quiz</h1>
          </div>
          <div className=' flex w-full  justify-between mt-auto'>
            <CheckCircle color='green' size={'18px'} />
            <MoreVertical className=' cursor-pointer' size={'18px'} />
          </div>
        </div>


        <div className=' rounded-xl px-6 py-5 flex items-center justify-center gap-4 flex-col h-56 hover:scale-105 transition-all bg-white border shadow-sm'>
          <div className=' w-full'>
            <div className=' w-fit text-xs text-gray-700 flex gap-4 items-center bg-gray-200 px-2 rounded-lg py-1'>
              <Link size={'14px'} />
              <h3>Quiz Link</h3>
            </div>
          </div>
          <div className='w-full'>
            <h1 className=' text-lg'>New Quiz</h1>
          </div>
          <div className=' flex w-full  justify-between mt-auto'>
            <CheckCircle color='green' size={'18px'} />
            <MoreVertical className=' cursor-pointer' size={'18px'} />
          </div>
        </div>


        <div className=' rounded-xl px-6 py-5 flex items-center justify-center gap-4 flex-col h-56 hover:scale-105 transition-all bg-white border shadow-sm'>
          <div className=' w-full'>
            <div className=' w-fit text-xs text-gray-700 flex gap-4 items-center bg-gray-200 px-2 rounded-lg py-1'>
              <Link size={'14px'} />
              <h3>Quiz Link</h3>
            </div>
          </div>
          <div className='w-full'>
            <h1 className=' text-lg'>New Quiz</h1>
          </div>
          <div className=' flex w-full  justify-between mt-auto'>
            <CheckCircle color='green' size={'18px'} />
            <MoreVertical className=' cursor-pointer' size={'18px'} />
          </div>
        </div>


        <div className=' rounded-xl px-6 py-5 flex items-center justify-center gap-4 flex-col h-56 hover:scale-105 transition-all bg-white border shadow-sm'>
          <div className=' w-full'>
            <div className=' w-fit text-xs text-gray-700 flex gap-4 items-center bg-gray-200 px-2 rounded-lg py-1'>
              <Link size={'14px'} />
              <h3>Quiz Link</h3>
            </div>
          </div>
          <div className='w-full'>
            <h1 className=' text-lg'>New Quiz</h1>
          </div>
          <div className=' flex w-full  justify-between mt-auto'>
            <CheckCircle color='green' size={'18px'} />
            <MoreVertical className=' cursor-pointer' size={'18px'} />
          </div>
        </div>


        <div className=' rounded-xl px-6 py-5 flex items-center justify-center gap-4 flex-col h-56 hover:scale-105 transition-all bg-white border shadow-sm'>
          <div className=' w-full'>
            <div className=' w-fit text-xs text-gray-700 flex gap-4 items-center bg-gray-200 px-2 rounded-lg py-1'>
              <Link size={'14px'} />
              <h3>Quiz Link</h3>
            </div>
          </div>
          <div className='w-full'>
            <h1 className=' text-lg'>New Quiz</h1>
          </div>
          <div className=' flex w-full  justify-between mt-auto'>
            <CheckCircle color='green' size={'18px'} />
            <MoreVertical className=' cursor-pointer' size={'18px'} />
          </div>
        </div>



      </div>
    </div>
  )
}

export default Dashboard