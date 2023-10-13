'use client'
import React from 'react'
import Doughnut from './Doughnut'
import AddUser from './AddUser'

export default function TopProducts() {
    return (
        <div className=' flex items-center justify-between  text-black  mt-1 w-[100%] h-[15rem]'>
            <div className=' flex w-[45%]'>
                <Doughnut />
            </div>
            <div className=' flex w-[45%] '>
               <AddUser />
            </div>
        </div>


    )
}
