import React from 'react'
import { dashboardIcon, transactionsIcon, scheduleIcon, userIcon, settingIcon } from '../utils/icons'

const Sidebar = ({openSidebar, toogleHandler}) => {

  return (
    <div className={`h-screen w-screen sm:w-[280px] pl-5 flex items-center fixed ${openSidebar?'block':'hidden sm:flex'}`}>
        <div className='h-[95%] bg-black w-[90%] sm:w-[280px] rounded-[30px] flex flex-col pl-10'>
        <span onClick={()=>toogleHandler()} className='sm:block text-white font-bold text-xl absolute right-14 top-7 md:hidden lg:hidden xl:hidden'>X</span>
            <h3 className='mt-10 text-white text-3xl font-bold'>Board.</h3>

            <div className='text-gray-200 mt-10'>
                <ul>
                    <li className='flex items-center mt-5'>
                        <span>{dashboardIcon}</span>
                        <a className='ml-2 cursor-pointer'>Dashboard</a>
                    </li>
                    <li className='flex items-center mt-5'>
                        <span>{transactionsIcon}</span>
                        <a className='ml-2 cursor-pointer'>Transcations</a>
                    </li>
                    <li className='flex items-center mt-5'>
                        <span>{scheduleIcon}</span>
                        <a className='ml-2 cursor-pointer'>Schedule</a>
                    </li>
                    <li className='flex items-center mt-5'>
                        <span>{userIcon}</span>
                        <a className='ml-2 cursor-pointer'>User</a>
                    </li>
                    <li className='flex items-center mt-5'>
                        <span>{settingIcon}</span>
                        <a className='ml-2 cursor-pointer'>setting</a>
                    </li>
                </ul>
            </div>

            <div className='text-gray-200 flex flex-col absolute bottom-16'>
                <a className='ml-2 text-sm cursor-pointer'>Help</a>
                <a className='mt-4 ml-2 text-sm cursor-pointer'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar