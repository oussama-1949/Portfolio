import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";


function Overview() {
  return (
    <div className="bg-first px-28 py-4 text-mainText flex items-center space-x-5">
      <h2 className="text-6xl font-MyRegular ">1 </h2>
      <div className='font-MyThin text-xl'>
        <div>Year of Experience</div>
      </div>
      <h2 className="text-6xl font-MyRegular ">4 </h2>
      <div className='font-MyThin text-xl'>
        <div>Projects Completed Around the World</div>
      </div>
      <IoLogoJavascript className="text-[#8E71B4] text-5xl  hover:text-mainText" />
      <IoLogoHtml5 className="text-[#8E71B4] text-5xl  hover:text-mainText" />
      <RiTailwindCssFill className="text-[#8E71B4] text-5xl  hover:text-mainText" />
      <IoLogoCss3 className="text-[#8E71B4] text-5xl  hover:text-mainText" />
      <FaFigma className="text-[#8E71B4] text-5xl  hover:text-mainText" />
      <FaReact className="text-[#8E71B4] text-5xl  hover:text-mainText" />
      <SiExpress className="text-[#8E71B4] text-5xl  hover:text-mainText" />
      <SiMongodb className="text-[#8E71B4] text-5xl  hover:text-mainText" />
      <SiAdobephotoshop className="text-[#8E71B4] text-5xl  hover:text-mainText" />
      <SiAdobeillustrator className="text-[#8E71B4] text-5xl  hover:text-mainText" />
    </div>
  );
}

export default Overview;
