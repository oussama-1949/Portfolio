import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaBehanceSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="container mx-auto px-28 py-4 bg-second text-center">
      <span className="block font-MyThin text-mainText">Okot Tech</span>
      <div className="font-MyThinItalic text-mainText mb-4">Designed and built by <span className='text-third'> Oussama kotbi</span> </div>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl text-mainText" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-mainText" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl text-mainText" />
        </a>
        <a href="https://behance.net/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaBehanceSquare className="text-2xl text-mainText" />
        </a>
      </div>
    </div>
  );
}
