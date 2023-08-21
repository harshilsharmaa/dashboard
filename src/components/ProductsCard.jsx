import React from 'react'
import PieChart from './PieChart'

const ProductsCard = () => {
  return (
    <div className='flex flex-col w-[90%] sm:w-[48%] bg-white rounded-2xl mt-5 p-3'>
        <div className='flex justify-between'>
            <h4 className='font-bold'>Top Products</h4>
            <select>
                <option>May - June 2021</option>
                <option>June - July 2021</option>
                <option>July - Aug 2021</option>
            </select>
        </div>
        <div className='flex flex-col-reverse sm:flex-row justify-between items-center'>
            <div className='w-3/6 h-[185px]'>
                <PieChart/>
            </div>
            
            <div className='sm:w-3/6 mt-4'>
             <ul className='flex flex-row sm:flex-col'>
                <li className='flex'>
                    <span className='w-3 h-3 rounded-full bg-[#98D89E] mt-2'></span>
                    <div className='ml-3'>
                        <h4 className=' font-bold text-lg'>Basic Tees</h4>
                        <h5 className='text-gray-600'>55%</h5>
                    </div>
                </li>
                <li className='flex'>
                    <span className='w-3 h-3 rounded-full bg-[#F6DC7D] mt-2'></span>
                    <div className='ml-3'>
                        <h4 className=' font-bold text-lg'>Custom Short Pants</h4>
                        <h5 className='text-gray-600'>31%</h5>
                    </div>
                </li>
                <li className='flex'>
                    <span className='w-3 h-3 rounded-full bg-[#EE8484] mt-2'></span>
                    <div className='ml-3'>
                        <h4 className=' font-bold text-lg'>Super Hoodies</h4>
                        <h5 className='text-gray-600'>14%</h5>
                    </div>
                </li>
             </ul>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard