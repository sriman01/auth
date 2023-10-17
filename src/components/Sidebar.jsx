import React from 'react'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BsTags } from 'react-icons/bs'
import { TbCalendarTime } from 'react-icons/tb'
import { AiOutlineSetting } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'


export default function Sidebar() {
  return (
    <div className=' bg-slate-100 text-black  md:w-[90%] 2xl:w-[95%] h-[100%] my-auto ml-3 2xl-ml-6'>
          <div className='relative bg-blue-500 text-white w-[100%] h-[100%] py-[3rem] px-4 rounded-lg 2xl:px-10 2xl:h-[100%]'>
            <div className=' text-3xl 2xl:text-5xl font-bold mb-[3rem]'>Board.</div>
            <div className='flex flex-col gap-6 2xl:gap-14 ml-2 text-lg 2xl:text-3xl'>
                <div className='flex items-center gap-3 '>
                   <div className='' ><AiOutlinePieChart /></div>
                   <div className='  font-semibold'>Dashboard</div>
                </div>
                <div className='flex items-center gap-3'>
                   <div className=''><BsTags /></div>
                   <div className=' '>Transaction</div>
                </div>
                <div className='flex items-center gap-3'>
                   <div className=''><TbCalendarTime /></div>
                   <div className=' '>Schedules</div>
                </div>
                <div className='flex items-center gap-3'>
                   <div className=''><CgProfile /></div>
                   <div className=' '>Users</div>
                </div>
                <div className='flex items-center gap-3'>
                   <div className='' ><AiOutlineSetting /></div>
                   <div className=' '>Settings</div>
                </div>
            </div>
            <div className='absolute bottom-4'>
               <div>Help</div>
               <div>Contact Us</div>
            </div>
          </div>
    </div> 
  )
}
