import React from 'react';

export default function LeftContact() {
  return (
    <div className='w-1/2 '>
      <div className='w-1/2 text-4xl font-contactRegular text-first leading-normal'>
        Let's discuss <br />
        <span>on something <span className='text-[#A92280]'>cool</span> Together</span>
      </div>
      <div className='text-first font-customRegular mt-12'>
        I'm interested in...
      </div>
      <div className=' '>
      <div className='mt-2 p-2 rounded mr-4 bg-first text-first border border-first text-mainText inline-block mt-6'>
        Ecommerce
      </div>
      <div className='mt-2 p-2 rounded mr-4  text-first border border-first inline-block hover:bg-first hover:text-mainText cursor-pointer'>
        Blog Website
      </div>
      <div className='mt-2 p-2 rounded mr-4  text-first border border-first inline-block hover:bg-first hover:text-mainText cursor-pointer'>
        UI UX 
      </div>
      </div>

    </div>
  );
}
