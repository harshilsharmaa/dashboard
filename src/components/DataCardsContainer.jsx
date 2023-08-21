import React from 'react'
import DataCard from './DataCard'
import { revenueIcon, transactionsIconBlack, likeIcon, usersIcon } from '../utils/icons'


const DataCardsContainer = () => {
  return (
    <div className='flex flex-wrap sm:w-[90%] flex-row justify-evenly'>
      <DataCard icon={revenueIcon} bgColor={"bl"} text={"Total Revenues"} value={"$2,129,430"}/>
      <DataCard icon={transactionsIconBlack} bgColor={"or"} text={"Total Transactions"} value={"1,520"}/>
      <DataCard icon={likeIcon} bgColor={"pi"} text={"Total Likes"} value={"9,721"}/>
      <DataCard icon={usersIcon} bgColor={"dbl"} text={"Total Users"} value={"892"}/>
    </div>
    )
  }
  
  export default DataCardsContainer