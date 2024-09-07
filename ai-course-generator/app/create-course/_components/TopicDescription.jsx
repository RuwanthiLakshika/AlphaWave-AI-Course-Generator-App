import React from 'react'
import { Input } from '../../../@/components/ui/input'
import { Textarea } from '../../../@/components/ui/textarea'
import { FcIdea } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { useContext } from 'react';
import { UserInputContext } from '../../_context/UserInputContext';


function TopicDescription() {

  const {userCourseInput, setUserCourseInput}=useContext(UserInputContext);

  const handleInuputChange=(fieldName,value)=>{
    setUserCourseInput(prev=>({
      ...prev,
      [fieldName]:value
    }))
  }

  return (
    <div className='mx-20 lg:mx-44'>
        {/* Input Topic */}
        <div className='mt-5'>
        <div className="flex items-center space-x-2">
        <FcIdea />
          <label>Write the topic you want for which want to generate a course (Eg- Python Course, Yoga, etc.)</label>
        </div>
          <Input placeholder={'Topic'} className="h-14 text-xl"
          defaultValue={userCourseInput?.topic}
          onChange={(e)=>handleInuputChange('topic',e.target.value)}
          /> 
          </div>
          <div className='mt-5'>
          <div className="flex items-center space-x-2">
          <FcInspection />
            <label>Tell us more about your course, what you want to include in the course (Optional)</label>
          </div>
            <Textarea  placeholder="About your course"
            className="h-14 text-xl"
            defaultValue={userCourseInput?.description}
            onChange={(e)=>handleInuputChange('description',e.target.value)}
            />

          </div>

        {/* Text Area Desc */}

    </div>
  )
}

export default TopicDescription