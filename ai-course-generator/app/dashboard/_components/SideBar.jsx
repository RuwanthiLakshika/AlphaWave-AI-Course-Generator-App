import React from 'react'
import Image from 'next/image'
import path from 'path'
import { HiOutlineHome, HiOutlineSquare3Stack3D, HiOutlineShieldCheck  } from "react-icons/hi2";
import { RiLogoutCircleRLine } from "react-icons/ri";

function SideBar() {
    const Menu=[
        {
            id:1,
            name:'Home',
            icon:<HiOutlineHome />,
            path:'/dashboard'
        },
        {
            id:1,
            name:'Explore',
            icon:<HiOutlineSquare3Stack3D />,
            path:'/dashboard'
        },
        {
            id:1,
            name:'Upgrade',
            icon:<HiOutlineShieldCheck />,
            path:'/dashboard'
        },
        {
            id:1,
            name:'Logout',
            icon:<RiLogoutCircleRLine />,
            path:'/dashboard'
        },
       
    ]
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
     <Image src="/logo2.png" alt="logo" width={180} height={100} />
     <hr className='my-5'/>

     <ul>
        {Menu.map((item, index)=>(
            <div className='flex items-center gap-2 text-gray-600 p-3
            cursor-pointer hover:bg-gray-100 hover:text-black rounded'>
                <div className='text-2xl'>{item.icon}</div>
                <h2>{item.name}</h2>
            </div>

        ))}
     </ul>
    </div>
  )
}

export default SideBar