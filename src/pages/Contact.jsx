import React from 'react';
import LeftContact from '../components/LeftContact';
import RightContact from '../components/RightContact';

export default function Contact() {
  return (
    <div className='flex justify-between px-28 py-20 bg-firstBg'>
      <LeftContact />
      <RightContact />
    </div>
  );
}
