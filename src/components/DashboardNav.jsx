import React from 'react'
import {notificationIcon, userIcon, searchIcon} from '../utils/icons'

const DashboardNav = ({openSidebar, toogleHandler}) => {
  return (
    <div className='flex justify-between items-center mt-2 px-8 sm:pl-6'>
        {
          !openSidebar ? <img
          onClick={()=>toogleHandler()}
          className="h-12 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
        />
        :null
        }
        <h3 className='font-bold text-xl hidden sm:block'>Dashboard</h3>
        <div className='flex items-center'>
            <div className=' items-center bg-white rounded-lg pr-2 hidden sm:flex'>
                <input type='text' className='rounded-l-lg outline-none px-3 py-2 w-56' placeholder='Search...'/>
                <div className='bg-white rounded-r-lg '>{searchIcon}</div>
            </div>
            <span className='ml-5'>{notificationIcon}</span>
            <img
                className="h-8 ml-5"
                src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
                alt="user icon"
            />
        </div>
    </div>
  )
}

export default DashboardNav