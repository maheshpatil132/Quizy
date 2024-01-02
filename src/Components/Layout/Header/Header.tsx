import React, { useState } from 'react'
import { ScrollText, CircleUser, ChevronDown } from 'lucide-react';
import { Avatar } from '@mui/material';


const Header: React.FC = () => {

  const [select, setSelect] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const menus: Array<String> = ["Quizs", "Action", "Settings"];

  return (
    <div className=' py-4 px-12 bg-white relative flex items-center'>
      <div className=' mr-16'>
        <h1 className=' font-bold text-2xl text-Primary'>𝓺𝓾𝓲𝔃𝔂</h1>
      </div>
      <div className=' flex gap-8'>
        {
          menus.map((elem: String, index: number) => {
            return (
              <>
                <div key={index}
                  onClick={() => { setSelect(index) }}
                  className={`flex gap-5 cursor-pointer items-center py-1.5 justify-between px-2 ${select === index && 'bg-[#F1F5F9]'} hover:bg-gray-50  rounded-md`}
                >
                  <ScrollText size={'20px'} className=' text-Primary' />
                  <a className=' ' href={`/${elem}`}>{elem}</a>
                </div>

              </>
            )
          })
        }
      </div>

      {/* profile section */}
      <div className=' ml-auto relative flex gap-6 items-center'>
        <div className=' flex items-center gap-3'>
          {/* <CircleUser fill='lightgray' color='gray' strokeWidth={'1.25px'} />
           */}
           <Avatar sx={{ width: 28, height: 28 }}/>
          <h2 className=' font-medium'>Mahesh Patil</h2>
        </div>
        <div>
          <ChevronDown onClick={()=>{ setOpen(!open) }} className={`cursor-pointer ${open && 'rotate-180'} transition-all duration-300`} />
          
            <div className={`w-48 ${open ? ' h-fit overflow-visible ' : 'h-0'} overflow-hidden bg-white shadow-md -left-2 rounded-md top-12 absolute flex flex-col`}>
              <p className='cursor-pointer px-6 py-2 bg-gray-100'>Menu 1</p>
              <p className='cursor-pointer px-6 py-2 hover:bg-gray-50 '>Menu 1</p>
              <p className='cursor-pointer px-6 py-2 hover:bg-gray-50'>Menu 1</p>
            </div>

          

        </div>

      </div>

    </div>
  )
}

export default Header