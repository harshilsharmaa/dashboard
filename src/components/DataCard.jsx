import React from 'react'

const DataCard = ({icon, bgColor, text, value}) => {

  return (
    <div 
    className={`w-[180px] h-[80px] sm:w-[200px] sm:h-[110px] ${bgColor=="bl"?"bg-[#DDEFE0]":bgColor=='or'?"bg-[#F4ECDD]" :bgColor=='pi'?"bg-[#EFDADA]" :bgColor=='dbl'?"bg-[#DEE0EF]":null}  rounded-2xl p-4 mt-1 flex flex-row items-center justify-between sm:flex-col sm:items-start sm:mt-0`}>
        <div className='sm:w-full flex sm:flex-row-reverse'>{icon}</div>
        <div className='mt-3 ml-3 sm:ml-0'>
            <h4 className='text-sm'>{text}</h4>
            <h2 className='mt-1 font-bold text-xl'>{value}</h2>
        </div>
    </div>

  )
}

export default DataCard