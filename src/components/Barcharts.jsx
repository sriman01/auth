'use client'
import React from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

export default function Barcharts() {
  const data = {
    labels: ['', 'Week1', ' ', 'Week2', '', 'Week3', '', 'Week4', ''],
    datasets: [
      {
        label: 'User',
        data: [null, 300, null, 600, null, 900, null, 300, null],
        backgroundColor: '#98D89E',
        borderWidth: 0,
        borderRadius:3,
        barPercentage: 0.8
      },
      {
        label: 'Guest',
        data: [null, 200, null, 250, null, 500, null, 400, null],
        backgroundColor: '#EE8484',
        borderRadius:3,
        
        barPercentage: 0.8
      }
    ]
  }

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        barPercentage: 1, // Adjust the value as needed to control the gap between the bars
      },
    },
  }


  return (
    <div className='   bg-white shadow-inner rounded-lg w-[100%] text-black mt-3'>
      <div className='flex justify-between px-[8%] items-center'>
        <div className=' flex flex-col gap-1  pt-5'>
          <div className=' text-xl font-semibold'>Activities</div>
          <div className=' text-sm text-slate-500'>May - June 2024</div>
        </div>
        <div className='flex gap-3'>
          {data.datasets.map((item) => (
            <div key={item.label} className='flex items-center gap-1'>
              <div style={{ backgroundColor: item.backgroundColor }} className='w-[0.5rem] h-[0.5rem] rounded-full'></div>
              <div className=' text-sm'>{item.label}</div>
            </div>
          ))}
        </div>
      </div>


      <div className=' flex justify-center h-[13rem] 2xl:h-[16rem]'>
        <Bar
         width = {'600px'}
          data={data}
          options={options}
        >
        </Bar>
      </div>
    </div>
  )
}
