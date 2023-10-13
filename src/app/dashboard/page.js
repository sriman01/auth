import React from 'react'
import AnalyticsCard from '../../components/AnalyticsCard'
import BarChart from '../../components/Barcharts'
import TopProducts from '../../components/TopProducts'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <div className='bg-white '>
    <div className=' flex gap-8 '>
      <Sidebar />
      <div className='mt-[2rem]'>
        <Navbar />
        <AnalyticsCard />
        <BarChart />
        <TopProducts />
      </div>
    </div>
    </div>
  )
}
