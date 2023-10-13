'use client'
import React from 'react'
import {IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineSearch} from 'react-icons/ai'
import { FaUserCircle} from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className=' bg-slate-200 text-black w-[100%] shadow-inner mb-2'>
        <div className=' flex justify-between  bg-white py-1'>
            <div className=' text-lg font-bold'>Dashboard</div>
            <div className='flex items-center gap-3'>
                <div className='relative flex items-center bg-white rounded-lg shadow-md '>
                    <input 
                     className=' outline-none rounded-lg px-2 py-1 w-[80%]'
                     type='text' 
                     placeholder='Search...'
                     />
                    <div className='absolute text-xl right-3'><AiOutlineSearch /></div>
                </div>
                <div className=' text-2xl'><IoMdNotificationsOutline /></div>
                <div className=' text-2xl'><FaUserCircle /></div>
            </div>
        </div>
    </div>
  )
}
