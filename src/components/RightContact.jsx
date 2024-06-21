import React from 'react';
import { IoIosSend } from "react-icons/io";

export default function RightContact() {
  return (
    <div className='w-1/2 ml-6 pl-6 '>
      <div className="flex flex-col">
        <input placeholder='Your name' type='text' className='border border-[#B2A8C4] bg-secondBg p-2 pl-6 mt-6 font-customRegular w-4/6 outline-none placeholder-gray rounded'></input>
        <input placeholder='Your Email' type='email' className='border border-[#B2A8C4] bg-secondBg p-2 pl-6 mt-6 font-customRegular w-4/6 outline-none placeholder-gray rounded'></input>
        <input placeholder='Your Message' type='text' className='border border-[#B2A8C4] bg-secondBg  p-2 pl-6 mt-6 font-customRegular w-4/6 h-2/6 outline-none placeholder-gray rounded'></input>
        <button className='bg-first text-mainText w-2/6 mt-4  p-2 rounded flex items-center justify-center hover:bg-third'>
          <IoIosSend className="mr-2 " />
          Submit
        </button>
      </div>
    </div>
  );
}
