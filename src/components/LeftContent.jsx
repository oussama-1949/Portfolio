import { FaGithub, FaLinkedin, FaInstagram, FaBehanceSquare } from "react-icons/fa";

function LeftContent() {
  return (
    <div className="flex flex-col mt-16 mb-16 justify-center items-start space-y-4  w-1/2 p-4">
      <p className="text-6xl font-customRegular text-mainText">Hello👋,</p>
      <p className="text-6xl font-MyRegular text-[#8E71B4]">
        I'm a web <span className="text-6xl font-MyRegular text-[#8E71B4]">Developer</span>
      </p>
      <p className="text-2xl font-customRegular text-mainText">I build things for web</p>
      <div className="flex space-x-3">
        <a href="https://github.com/oussama-1949" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-[#8E71B4] text-2xl cursor-pointer hover:text-mainText" />
        </a>
        <a href="https://www.linkedin.com/in/oussama-kotbi-ibtok/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[#8E71B4] text-2xl hover:text-mainText" />
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-[#8E71B4] text-2xl hover:text-mainText" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaBehanceSquare className="text-[#8E71B4] text-2xl hover:text-mainText" />
        </a>
      </div>
    </div>
  );
}

export default LeftContent;
