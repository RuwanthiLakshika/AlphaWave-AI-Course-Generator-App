import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../@/components/ui/select";
import { Input } from '../../../@/components/ui/input'
import { FcPortraitMode } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcClapperboard } from "react-icons/fc";
import { useContext } from 'react';
import { UserInputContext } from '../../_context/UserInputContext';

function SelectOption() {

  const {userCourseInput, setUserCourseInput}=useContext(UserInputContext);

  const handleInuputChange=(fieldName,value)=>{
    setUserCourseInput(prev=>({
      ...prev,
      [fieldName]:value
    }))
  }

  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div className="w-full">
        <div className="flex items-center space-x-2">
            <FcPortraitMode />
            <label className="text-sm">Difficulty Level</label>
          </div>
          <Select onValueChange={(value)=>handleInuputChange('level',value)}
            defaultValue={userCourseInput?.level}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="w-full min-w-[392px]">
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
        <div className="flex items-center space-x-2">
        <FcClock />
          <label className="text-sm">Course Duration</label>
        </div>
          <Select onValueChange={(value)=>handleInuputChange('duration',value)}
            defaultValue={userCourseInput?.duration}>
            <SelectTrigger className="w-full style={{ cursor: 'pointer' }}">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="w-full min-w-[392px]">
              <SelectItem value="1 Hour">1 Hour</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
            </SelectContent>
          </Select>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-20">
        <div className="w-full">
        <div className="flex items-center space-x-2">
        <FcClapperboard />
          <label className="text-sm">Add Video</label>
        </div>
          <Select onValueChange={(value)=>handleInuputChange('displayVideo',value)}
            defaultValue={userCourseInput?.displayVideo}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="w-full min-w-[392px]">
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
        <div className="flex items-center space-x-2">
        <FcDocument />
          <label className="text-sm">No of Chapters</label>
        </div>
          <Input type="number" className="h-14 text-lg"
          onChange={(event)=>handleInuputChange('noOfChapters',event.target.value)}
          defaultValue={userCourseInput?.noOfChapters}
          />
        </div>


      </div>
    </div>
  );
}

export default SelectOption;
