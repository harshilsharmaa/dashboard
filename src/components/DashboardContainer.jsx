import React from 'react'
import DataCardsContainer from './DataCardsContainer'
import LineChartContainer from './LineChartContainer'
import ProductsCard from './ProductsCard'
import ScheduleCard from './ScheduleCard'


const DashboardContainer = () => {
  return (
    <div className='mt-2 w-full flex  flex-col items-center'>
      <DataCardsContainer />

      <LineChartContainer/>

      <div className='w-screen sm:w-[90%] m-auto flex flex-col items-center sm:flex-row justify-between mb-4'>
        <ProductsCard/>
        <ScheduleCard/>
      </div>
    </div>
  )
}

export default DashboardContainer