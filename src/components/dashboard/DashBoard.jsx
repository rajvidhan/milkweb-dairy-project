
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Common/Sidebar'

const DashBoard = () => {
  return (
    <div className='relavite flex min-h-[calc(100vh-3.5rem)]'>
    <Sidebar />
   
    <div className='h-[calc(100vh-3.5rem)]  xl:w-[90%] overflow-auto'>

       <div className='w-11/12 max-w-[1000px] '>
        <Outlet />
       </div>

    </div>
  
</div>
  )
}

export default DashBoard
