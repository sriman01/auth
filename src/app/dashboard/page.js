import React from 'react'
import AnalyticsCard from '../../components/AnalyticsCard'
import BarChart from '../../components/Barcharts'
import TopProducts from '../../components/TopProducts'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'



export default function page() {
  return (
    <div className='bg-white min-h-screen'>
      <div className=' flex flex-wrap 2xl:gap-4  '>
        <div className=' w-[20%] min-h-screen my-[2rem] 2xl:w-[25%] 2xl:ml-4 mt-3'>

          <Sidebar />
        </div>
        <div className='flex flex-col gap-3 my-[2rem] h-[100%]w-[78%]  min-h-screen 2xl:w-[70%] py-4 '>
          <Navbar />
          <AnalyticsCard />
          <BarChart />
          <TopProducts />
        </div>
      </div>

    </div>
  )
}
