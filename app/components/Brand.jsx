import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

const Brand = () => {
  return (
    <div className="flex flex-wrap gap-12 justify-center p-8 lg:p-0 bg-gradient-to-r to-sky-950 from-gray-900" id="tech">
      <div className="flex flex-col items-center border border-gray-500 p-2 rounded-md text-sky-500">
        <FaReact />
        <span className="text-xl font-normal">React</span>
      </div>
      <div className="flex flex-col items-center border border-gray-500 p-2 rounded-md">
        <RiTailwindCssFill />
        <span className="text-xl font-normal">Tailwind CSS</span>
      </div>
      <div className="flex flex-col items-center border border-gray-500 p-2 rounded-md text-black">
        <RiNextjsLine />
        <span className="text-xl font-normal">Next JS</span>
      </div>
      <div className="flex flex-col items-center border border-gray-500 p-2 rounded-md text-green-700">
        <SiMongodb />
        <span className="text-xl font-normal">MongoDB</span>
      </div>
      <div className="flex flex-col items-center border border-gray-500 p-2 rounded-md text-yellow-500">
        <SiExpress />
        <span className="text-xl font-normal">Express</span>
      </div>
      <div className="flex flex-col items-center border border-gray-500 p-2 rounded-md text-green-700">
        <FaNode className="text-2xl" />
        <span className="text-xl font-normal">Node Js</span>
      </div>
      <div className="flex flex-col items-center border border-gray-500 p-2 rounded-md text-blue-500">
        <BiLogoTypescript />
        <span className="text-xl font-normal">Typescript</span>
      </div>
    </div>
  );
};

export default Brand;
