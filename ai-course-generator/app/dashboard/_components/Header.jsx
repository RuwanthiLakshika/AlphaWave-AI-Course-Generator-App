import { User } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
        <Image src='/favicon.png' width={30} height={30}/>
        <UserButton/>
    </div>
  )
}

export default Header