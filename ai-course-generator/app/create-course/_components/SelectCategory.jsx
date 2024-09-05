import React from 'react'
import Image from 'next/image'
import { Cat } from 'lucide-react'


function SelectCategory() {

    const CategoryList = [
        {
          id: 1,
          name: 'Programming',
          icon: '/coding.jpeg',
          prompt: ''
        },
        {
          id: 2,
          name: 'Health',
          icon: '/health.jpeg',
          prompt: ''
        },
        {
          id: 3,
          name: 'Creative',
          icon: '/creative.jpeg',
          prompt: ''
        },
      ];
  return (
    <div>
      <h2 className='my-5'>Select the Course Category</h2>
      
    <div className='grid grid-cols-3 gap-10'>
      
    {CategoryList && CategoryList.length > 0 ? (
      CategoryList.map((item, index) => (
        <div key={item.id}>
            <div className='flex flex-col p-5 border items-center rounded-xl
            hover:border-primary hover:bg-blue-50 cursor-pointer'>
          <Image src={item.icon} width={50} height={50} alt={item.name} />
          <h2>{item.name}</h2>
          </div>
        </div>
      ))
    ) : (
      <p>No categories available</p>
    )}
  </div>
  </div>
  )
}

export default SelectCategory