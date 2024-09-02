import React from 'react'
import SideBar from './_components/SideBar'

function DashboradLayout({children}) {
  return (
    <div>
        <div className='md:w-64 hidden md:block'>
            <SideBar/>
        </div>
        <div className='md:ml-64'>
        {children}
        </div>
    
    </div>
  )
}

export default DashboradLayout