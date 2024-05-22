import Link from "next/link";
import React from "react";
import { LuMail } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      {/* <footer className="footer p-8 bg-gradient-to-r to-sky-950 from-gray-900 text-gray-400">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href={`/`} className="link link-hover">
            Branding
          </Link>
          <Link href={`/`} className="link link-hover">
            Design
          </Link>
          <Link href={`/`} className="link link-hover">
            Marketing
          </Link>
          <Link href={`/`} className="link link-hover">
            Advertisement
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href={`/`} className="link link-hover">
            About us
          </Link>
          <Link href={`/`} className="link link-hover">
            Contact
          </Link>
          <Link href={"/"} className="link link-hover">
            Jobs
          </Link>
          <Link href={"/"} className="link link-hover">
            Press kit
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href={`/`} className="link link-hover">
            Terms of use
          </Link>
          <Link href={`/`} className="link link-hover">
            Privacy policy
          </Link>
          <Link href={`/`} className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </footer> */}

      {/* lower footer */}
      <footer className="footer p-8 bg-gradient-to-r to-sky-950 from-gray-900 text-gray-400">
        <aside className="items-center grid-flow-col">
          <p className="capitalize">
            &#169; all rights reserved baz kwagala trevor
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-8">
            <Link href={"/"}>
              <FaGithub className="text-3xl" />
            </Link>
            <Link href={"/"}>
              <LuMail className="text-3xl" />
            </Link>
            <Link href={"/"}>
              <RiTwitterXLine className="text-3xl" />
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
