import { Link } from "react-router-dom";
import { FaUser, FaShoppingBag } from "react-icons/fa";


export default function Navber (){
     return (



    <header>
   
      <div className="bg-yellow-700 text-white text-center text-sm py-2 ">
        SIGN UP TO OUR NEWSLETTER FOR 10% OFF
      </div>

      
      <nav className="flex items-center justify-between px-10 py-4 border-b">

       
        <div className="flex gap-6 text-sm font-medium">
          <Link to="/"> Home</Link>
          <Link to="OurStandards">OUR STANDARDS</Link>
          <Link to="sclence">THE SCIENCE</Link>
          <Link to="thecream">THE CREAM</Link>
        </div>

        
        <div className="text-2xl font-bold tracking-[10px] text-[#8f6424] mr-[250px]">
          ELTOR
        </div>

        
        <div className="flex gap-8 text-lg">
          <FaUser className="cursor-pointer" />
          <FaShoppingBag className="cursor-pointer" />
        </div>

      </nav>
    </header>
  );
}
