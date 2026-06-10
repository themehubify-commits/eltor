import { Link } from "react-router-dom";
import { FaUser, FaShoppingBag } from "react-icons/fa";

export default function Navber() {
  return (
    <header>
      <div className="bg-yellow-700 text-white text-center text-xs md:text-sm py-2">
        SIGN UP TO OUR NEWSLETTER FOR 10% OFF
      </div>

      <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 border-b gap-4 md:gap-0">

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm font-medium">
          <Link to="/">HOME</Link>
          <Link to="OurStandards">OUR STANDARDS</Link>
          <Link to="sclence">THE SCIENCE</Link>
          <Link to="thecream">ADD TO CART</Link>
        </div>

        <div className="text-xl md:text-2xl font-bold tracking-[6px] md:tracking-[10px] text-[#8f6424] md:mr-[250px]">
          ELTOR
        </div>

        <div className="flex gap-6 md:gap-8 text-lg">
          <FaUser className="cursor-pointer" />
          <FaShoppingBag className="cursor-pointer" />
        </div>

      </nav>
    </header>
  );
}