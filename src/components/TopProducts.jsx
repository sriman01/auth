'use client'
import React from 'react'
import Doughnut from './Doughnut'
import AddUser from './AddUser'

export default function TopProducts() {
    return (
        <div className=' flex items-center justify-between   text-black  mt-1 w-[100%] '>
            <div className=' flex w-[45%] shadow-lg'>
                <Doughnut />
            </div>
            <div className=' flex w-[45%] shadow-lg'>
               <AddUser />
            </div>
        </div>


    )
}
