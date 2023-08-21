import React from 'react'
import PieChart from './PieChart'

// flex flex-col  bg-white rounded-2xl mt-5 p-3

const ScheduleCard = () => {
  return (
    <div className='flex flex-col w-[90%] sm:w-[48%] bg-white rounded-2xl mt-5 px-8 py-4'>
        <div className='flex justify-between'>
            <h4 className='font-bold'>Today’s schedule</h4>
            <h5 className='text-sm text-gray-500 cursor-pointer'>See All</h5>
        </div>
        <div className='flex flex-col mt-3'>
            <div className='h-24 sm:h-[66px]  border-l-[6px] border-[#9BDD7C]'>
                <h3 className='ml-3'>Meeting with suppliers from Kuta Bali</h3>
                <h4 className='ml-3 text-sm text-gray-500'>14.00-15.00</h4>
                <h4 className='ml-3 text-sm text-gray-500'>at Sunset Road, Kuta, Bali</h4>
            </div>

            <div className='h-24 sm:h-[66px]  border-l-[6px] border-[#6972C3] mt-10 sm:mt-8'>
                <h3 className='ml-3'>Check operation at Giga Factory 1</h3>
                <h4 className='ml-3 text-sm text-gray-500'>18.00-20.00</h4>
                <h4 className='ml-3 text-sm text-gray-500'>at Central Jakarta</h4>
            </div>

        </div>
    </div>
  )
}

export default ScheduleCard