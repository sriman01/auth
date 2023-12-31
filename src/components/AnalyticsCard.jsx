import React from 'react'
import Image from 'next/image'
import { FiUsers} from 'react-icons/fi'
import { RiArrowDropDownLine } from 'react-icons/ri'

export default function AnalyticsCard() {
    return (
        <div className=' flex flex-col sm:flex-row flex-wrap gap-2 justify-between items-center sm:items-start bg-white w-[100%]  text-black 2xl:h-[10rem]'>

            <div className=' flex flex-col 2xl:gap-4 w-[15rem] 2xl:w-[18rem] 2xl:h-[10rem]  p-3 gap-1 rounded-lg shadow-inner'>
                <div className=' bg-green-500 inline-block w-[2rem] p-2 rounded-full'><Image src = '/revenue.png' width='400' height='400' /></div>
                <div className=' text-sm 2xl:text-lg font-semibold'>Total Revenues</div>
                <div className=' flex justify-between'>
                    <div className=' text-lg font-bold'>$2,129,430</div>
                    <div className='text-2xl mt-2'><RiArrowDropDownLine /></div>
                    <div className=' bg-green-400 p-1 rounded-full'>+2.5%</div>
                </div>
            </div>
            <div className=' flex flex-col 2xl:gap-4 w-[15rem] 2xl:w-[18rem] 2xl:h-[10rem]  p-3 gap-1 rounded-lg shadow-inner'>
                <div className=' bg-yellow-500 inline-block w-[2rem] p-2 rounded-full'><Image src = '/transaction.png' width='400' height='400' /></div>
                <div className=' text-sm 2xl:text-lg font-semibold'>Total Transaction</div>
                <div className=' flex justify-between'>
                    <div className=' text-lg font-bold'>$2,129,430</div>
                    <div className='text-2xl mt-2'><RiArrowDropDownLine /></div>
                    <div className=' bg-green-400 p-1 rounded-full'>+2.5%</div>
                </div>
            </div>
            <div className=' flex flex-col 2xl:gap-4 w-[15rem] 2xl:w-[18rem] 2xl:h-[10rem]  p-3 gap-1 rounded-lg shadow-inner'>
                <div className=' bg-red-400 inline-block w-[2rem] p-2 rounded-full'><Image src = '/likes.png' width='400' height='400' /></div>
                <div className=' text-sm 2xl:text-lg font-semibold'>Total Likes</div>
                <div className=' flex justify-between'>
                    <div className=' text-lg font-bold'>$2,129,430</div>
                    <div className='text-2xl mt-2'><RiArrowDropDownLine /></div>
                    <div className=' bg-green-400 p-1 rounded-full'>+2.5%</div>
                </div>
            </div>
            <div className=' flex flex-col 2xl:gap-4 w-[15rem] 2xl:w-[18rem] 2xl:h-[10rem]  p-3 gap-1 rounded-lg shadow-inner'>
                <div className=' bg-blue-500 inline-block w-[2rem] p-2 rounded-full text-slate-200'><FiUsers /></div>
                <div className=' text-sm 2xl:text-lg font-semibold'>Total Users</div>
                <div className=' flex justify-between'>
                    <div className=' text-lg font-bold'>$2,129,430</div>
                    <div className='text-2xl mt-2'><RiArrowDropDownLine /></div>
                    <div className=' bg-green-400 p-1 rounded-full'>+2.5%</div>
                </div>
            </div>

        </div>
    )
}
