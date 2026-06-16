import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

export default function Navber() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="bg-yellow-700 text-white text-center text-xs md:text-sm py-2">
        SIGN UP TO OUR NEWSLETTER FOR 10% OFF
      </div>

      <nav className="border-b">
        <div className="flex items-center justify-between px-4 md:px-10 py-4">

         

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link to="/">HOME</Link>
            <Link to="OurStandards">OUR STANDARDS</Link>
            <Link to="sclence">THE SCIENCE</Link>
            <Link to="thecream">ADD TO CART</Link>
          </div>
             
             <div className="text-2xl font-bold tracking-[8px] text-[#8f6424] mr-[250px]">
            ELTOR
          </div>

          <div className="flex items-center gap-5 md:gap-10 text-lg md:mr-[80px] mr-5">
            <FaUser className="cursor-pointer hidden md:block" />
            <FaShoppingBag className="cursor-pointer" />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 py-4 border-t text-sm font-medium bg-white">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link to="OurStandards" onClick={() => setMenuOpen(false)}>
              OUR STANDARDS
            </Link>
            <Link to="sclence" onClick={() => setMenuOpen(false)}>
              THE SCIENCE
            </Link>
            <Link to="thecream" onClick={() => setMenuOpen(false)}>
              ADD TO CART
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}