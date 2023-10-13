import React from 'react'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BsTags } from 'react-icons/bs'
import { TbCalendarTime } from 'react-icons/tb'
import { AiOutlineSetting } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'


export default function Sidebar() {
  return (
    <div className=' bg-slate-100 text-black min-h-screen w-[15%] my-auto ml-3'>
          <div className='relative bg-blue-500 text-white w-[100%] h-[42rem] py-[3rem] px-4 rounded-lg'>
            <div className=' text-3xl font-bold mb-[3rem]'>Board.</div>
            <div className='flex flex-col gap-8 ml-2'>
                <div className='flex items-center gap-3 '>
                   <div className='text-xl' ><AiOutlinePieChart /></div>
                   <div className=' text-xl font-semibold'>Dashboard</div>
                </div>
                <div className='flex items-center gap-3'>
                   <div className='text-xl'><BsTags /></div>
                   <div className=' text-xl'>Transaction</div>
                </div>
                <div className='flex items-center gap-3'>
                   <div className='text-xl'><TbCalendarTime /></div>
                   <div className=' text-xl'>Schedules</div>
                </div>
                <div className='flex items-center gap-3'>
                   <div className='text-xl'><CgProfile /></div>
                   <div className=' text-xl'>Users</div>
                </div>
                <div className='flex items-center gap-3'>
                   <div className='text-xl' ><AiOutlineSetting /></div>
                   <div className=' text-xl'>Settings</div>
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
