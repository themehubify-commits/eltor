import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <footer className="bg-[#fff8ed] text-[#7B5B28] mt-10 h-[272px] m-[10px] ">
        <div className="  px-1 py-8 grid grid-cols-2 md:grid-cols-4  gap-15 items-start ml-[20px] ">
          <div className="text-4xl font-bold tracking-[10px] mt-2 ml-[30px]">ELIOR</div>

          <div>
            <h3 className="font-semibold mb-2 ">MAIN MENU</h3>
            <div className="flex gap-2 text-shadow-mauve-100 text-sm">
              <Link to="ourstandards">OurStandards</Link>
              <Link to="sclence">TheScience</Link>
              <Link to="thecream">TheCream</Link>
              <Link to="/">Home</Link>
            </div>
          </div>

          <div className="">
            <h3 className="font-semibold mb-3"  >CONTACT</h3>
            <p className="text-sm">CUSTOMER SUPPORT : elior@gmail.com</p>
          </div>

          <div className="20px">
            <h3 className="font-semibold mb-3">FOLLOW US</h3>
            <div className="flex gap-4 text-lg">
             <a href="https://www.instagram.com/sajiebwebdav/"> <FaInstagram className="cursor-pointer" /> </a>
             <a href="https://www.facebook.com/Themehubify"> <FaFacebookF className="cursor-pointer" /> </a>
              <FaXTwitter className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-[#cbbfa6] text-xs px-10 py-4">
          ©ELIOR ALL RIGHTS RESERVED.
        </div>
      </footer>
    </>
  );
}

export default Footer;
