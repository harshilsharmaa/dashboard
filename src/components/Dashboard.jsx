import React, { useState } from 'react'
import Sidebar from './Sidebar'
import DashboardNav from './DashboardNav'
import DashboardContainer from './DashboardContainer'

const Dashboard = () => {

    const [openSidebar, setOpenSidebar] = useState(true);
    console.log(openSidebar);

    const toogleHandler = () => {
        setOpenSidebar(!openSidebar);
    }

    return (
        <div className='bg-[#F5F5F5] flex justify-between '>
            <Sidebar openSidebar={openSidebar} toogleHandler={toogleHandler} />

            <div className=' w-screen sm:ml-auto sm:w-[80%] '>
                <DashboardNav toogleHandler={toogleHandler} openSidebar={openSidebar} />
                <DashboardContainer />
            </div>
        </div>
    )
}

export default Dashboard