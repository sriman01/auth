'use client'
import React from 'react'
import { GrAdd } from 'react-icons/gr'


export default function AddUser() {
  
  return (
    <div  className='flex justify-center items-center bg-white shadow-inner h-[15rem] w-[100%] rounded-lg'>
      <div className='flex flex-col items-center gap-3'>
        <div  className=' inline-block text-3xl bg-slate-200 text-slate-500 p-4 rounded-full cursor-pointer'><GrAdd /></div>
        <div className=' text-lg font-semibold'>Add Profile</div>


      </div>
    </div>
  )
}
