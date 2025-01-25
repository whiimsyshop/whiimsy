"use client"
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import React, { useState } from 'react'
import { MdLockOutline, MdOutlinePrivacyTip } from 'react-icons/md'
import { log } from 'console'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { PiUserCircle } from 'react-icons/pi'
import { IoMdSpeedometer } from 'react-icons/io'
import CustomProgressbar from '../components/CustomProgressbar'

interface BlogsProps {
  blog: {
    privacy: number,
    features: number,
    speed: number,
    userScore: number,
    valueForMoney: number,
  }
  idx:number
}

const AccordianComponent: React.FC<BlogsProps> = ({ blog,idx }) => {
  const [isOpen, setIsOpen] = useState(idx==0);
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Accordion variant="splitted" className='customAccording' defaultExpandedKeys={["0"]}>
      <AccordionItem key={idx} aria-label="Accordion 1" title={isOpen ?  "Less Details": "More Details"} onClick={handleToggle} >
        <div className=" laptop:w-[15%]  flex-col gap-4 mt-4 ">
          <div className="flex items-center gap-2 border border-black px-[15px] mb-2 rounded-lg py-1">
            <MdLockOutline className="text-[20px]" />
            <div className="w-full">
              <div className="text-[13px] text-gray-700 flex justify-between pb-1"><span>Privacy</span><span>{blog.privacy}</span></div>
              <CustomProgressbar
                value={blog.privacy}
                size="sm"
              />
            </div>
          </div>
          <div className="flex items-center  gap-2 border border-black px-[15px] mb-2 rounded-lg py-1">
            <MdOutlinePrivacyTip className="text-[20px]" />
            <div className="w-full">
              <div className="text-[13px] text-gray-700 flex justify-between pb-1"><span>Features</span><span>{blog.features}</span></div>
              <CustomProgressbar
                value={blog.features}
                size="sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 border border-black px-[15px] mb-2 rounded-lg py-1">
            <IoMdSpeedometer className="text-[20px]" />
            <div className="w-full">
              <div className="text-[13px] text-gray-700 flex justify-between pb-1"><span>Speed</span><span>{blog.speed}</span></div>
              <CustomProgressbar
                value={blog.speed}
                size="sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 border border-black px-[15px] mb-2 rounded-lg py-1">
            <PiUserCircle className="text-[20px]" />
            <div className="w-full">
              <div className="text-[13px] text-gray-700 flex justify-between pb-1"><span>User Score</span><span>{blog.userScore}</span></div>
              <CustomProgressbar
                value={blog.userScore}
                size="sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 border border-black px-[15px] mb-2 rounded-lg py-1">
            <AiOutlineDollarCircle className="text-[20px]" />
            <div className="w-full">
              <div className="text-[13px] text-gray-700 flex justify-between pb-1"><span>Value for Money</span><span>{blog.valueForMoney}</span></div>
              <CustomProgressbar
                value={blog.valueForMoney}
                size="sm"
              />
            </div>
          </div>

        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordianComponent