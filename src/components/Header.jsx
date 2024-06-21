import React from 'react';
import { FiDownloadCloud } from 'react-icons/fi';

function Header() {
  return (
    <header className="bg-gradient-to-r from-third to-first text-white">
      <div className="container mx-auto px-28 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className='font-MyThin'>Okot Tech</span>
          </div>
          <nav className="flex space-x-10 ">
            <a href="#home" className="hover:text-gray-300 font-customRegular">Home</a>
            <a href="#about" className="hover:text-gray-300 font-customRegular">About</a>
            <a href="#skills" className="hover:text-gray-300 font-customRegular">Skills</a>
            <a href="#projects" className="hover:text-gray-300 font-customRegular">Projects</a>
          </nav>
          <a href="/last6_CV.pdf" download="Resume.pdf" className="bg-mainText text-first font-customRegular flex items-center px-4 py-1 rounded-xl hover:bg-gray-200">
            <FiDownloadCloud className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
