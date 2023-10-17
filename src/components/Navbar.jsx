'use client'
import React from 'react'
import {IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineSearch} from 'react-icons/ai'
import { FaUserCircle} from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className='  text-black 2xl:py-6  mb-2'>
        <div className=' flex justify-between 2xl:py-3 bg-white py-1 2xl:text-3xl'>
            <div className=' text-lg font-bold 2xl:text-3xl'>Dashboard</div>
            <div className='flex items-center gap-3'>
                <div className='relative flex items-center bg-white rounded-lg shadow-md '>
                    <input 
                     className=' outline-none rounded-lg px-2 py-1 w-[80%]'
                     type='text' 
                     placeholder='Search...'
                     />
                    <div className='absolute text-xl right-3 2xl:text-3xl'><AiOutlineSearch /></div>
                </div>
                <div className=' text-2xl 2xl:text-3xl'><IoMdNotificationsOutline /></div>
                <div className=' text-2xl 2xl:text-3xl'><FaUserCircle /></div>
            </div>
        </div>
    </div>
  )
}
