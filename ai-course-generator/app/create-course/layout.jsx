import React from 'react'
import Header from '../dashboard/_components/Header'

function CreateCourseLayout({children}) {
  return (
    <div> 
        <Header />
        {children}</div>
  )
}

export default CreateCourseLayout