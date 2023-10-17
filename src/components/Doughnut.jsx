import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function TopProducts() {
  const data = {
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
    datasets: [
      {
        data: [55, 31, 14], // Adjust the percentages as needed
        backgroundColor: ['#98D89E', '#EE8484', '#F6DC7D'],
      },
    ],
  };

  const options = {
    cutout: '70%', 
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <div className=' flex flex-col justify-center bg-white shadow-inner rounded-lg text-black h-[15rem] mt-1 w-[100%]'>
      <div className='flex items-center justify-between px-[10%] py-2'>
        <div className=' text-lg font-semibold'>Top Products</div>
        <div className='text-xs text-slate-400'>May-June 2023</div>
      </div>
      <div className='flex  justify-between items-center px-[10%] py-2'>
        <div >
          <Doughnut
            data={data}
            options={options}
            width={130} // Set the width of the chart
            height={130} // Set the height of the chart
          />
        </div>
        <div>
        <div className='flex flex-col gap-2 legend'>
            {data.labels.map((label, index) => (
              <div key={index}>
                <div className='flex  items-center gap-1 legend-item'>
                  <span className=' bg-black legend-color block w-[10px] h-[10px]' style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}></span>
                  <span className='legend-label text-xs font-bold'>{label}</span>
                </div>
                <div className='ml-4 text-sm'>{data.datasets[0].data[index]}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
