"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiNextjsFill, RiNextjsLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { NAV_LINKS } from "../constants";
import { CiUser } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import Headroom from "react-headroom";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(true);

  const handleClick = () => {
    setToggleNav((prevState) => !prevState);
  };

  return (
    <Headroom>
      <nav className="flex justify-between items-center p-5 z-30 lg:p-8 lg:px-12 bg-base-200 bg-gradient-to-r to-sky-950 from-gray-900 sticky">
        <div>
          <Link
            href={"/"}
            className="flex items-center gap-3 cursor-pointer text-sky-500 text-2xl"
          >
            {/* <RiNextjsLine className="text-4xl" /> */}
            <div className="border-4 h-8 rounded-full w-8 border-sky-500"></div>
            Alphasite
          </Link>
        </div>

        {/* phone nav */}
        <div className="relative z-40">
          <ul
            className={`absolute right-0 top-5 bg-base-200 px-8 mt-2 rounded-md bg-gradient-to-l to-sky-950 from-gray-900 ${
              toggleNav ? "hidden" : ""
            }`}
          >
            {NAV_LINKS.map((link) => (
              <li className="p-5" key={link.key} onClick={handleClick}>
                <Link href={`#${link.link}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
          {toggleNav ? (
            <CgMenuRightAlt
              className="text-3xl cursor-pointer lg:hidden"
              onClick={() => setToggleNav((prevState) => !prevState)}
            />
          ) : (
            <IoClose
              className="text-2xl cursor-pointer lg:hidden"
              onClick={() => setToggleNav((prevState) => !prevState)}
            />
          )}
        </div>
        {/* comp nav */}
        <ul className="hidden h-full gap-16 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="cursor-pointer font-medium text-teal-200 hover:text-teal-500"
            >
              <Link href={`#${link.link}`}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Headroom>
  );
};

export default Navbar;
