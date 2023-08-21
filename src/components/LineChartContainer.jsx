import React from 'react'
import LineChart from './LineChart'


const LineChartContainer = () => {
  return (
    <div className=' mt-5 py-3 m-auto w-[90%] sm:w-[90%] sm:h-72 flex flex-col items-center bg-white rounded-xl'>
        <div className='flex justify-between w-full'>
          <div className='px-10'>
            <h3 className='font-bold'>Activities</h3>
            <select>
              <option>
                May-June
              </option>
              <option>
                June-July
              </option>
              <option>
                July-Aug
              </option>
            </select>
          </div>
          <div className='flex mr-10'>
            <div className='flex  items-center'>
              <span className='w-3 h-3 rounded-full bg-red-500'></span>
              <h4 className='ml-2'>Guest</h4>
            </div>
            <div className='ml-5 flex items-center'>
              <span className='w-3 h-3 rounded-full bg-green-500'></span>
              <h4 className='ml-2'>User</h4>
            </div>
          </div>
        </div>
        <LineChart />
      </div>
  )
}

export default LineChartContainer