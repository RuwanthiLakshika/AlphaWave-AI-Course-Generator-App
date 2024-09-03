"use client";
import React from 'react'
import { useUser } from '@clerk/nextjs'

function AddCourse() {
    const {user} = useUser();
  return (
 
    <div>
        <div>
            <h2 className='text-2xl'>Hello, <span className='font-bold'>{user?.fullName}</span></h2>
        </div>
    </div>
  )
}

export default AddCourse