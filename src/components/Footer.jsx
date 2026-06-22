import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="bg-[#fff8ed] text-[#7B5B28] mt-10 min-h-[272px] m-[10px] ">
        <div className="  px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-gap-15 items-start  ">
          <div className="md:text-4xl text-3xl font-bold mnd:tracking-[10px] tracking-[6px] mt-2 text-center md:text-left">ELIOR</div>

          <div>
            <h3 className="font-semibold mb-2 ">MAIN MENU</h3>
            <div className="flex flex-col md:flex-row gap-2 text-shadow-mauve-100 text-sm">
              <Link to="ourstandards">OurStandards</Link>
              <Link to="sclence">TheScience</Link>
              <Link to="thecream">Add To</Link>
              <Link to="/">Home</Link>
            </div>
          </div>

          <div className="break-words">
            <h3 className="font-semibold mb-3"  >CONTACT</h3>
            <p className="text-sm">CUSTOMER SUPPORT : elior@gmail.com</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">FOLLOW US</h3>
            <div className="flex gap-4 text-lg">
             <a href="https://www.instagram.com/sajiebwebdav/"> <FaInstagram className="cursor-pointer" /> </a>
             <a href="https://www.facebook.com/Themehubify"> <FaFacebookF className="cursor-pointer" /> </a>
              <a href="https://www.linkedin.com/in/sajib-kumar-das-34a693383/"><FaLinkedinIn className="cursor-pointer" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#cbbfa6] text-xs md:px-10 px-4 py-4 text-center md:text-left">
          ©ELIOR ALL RIGHTS RESERVED.
        </div>
      </footer>
    </>
  );
}

export default Footer;
