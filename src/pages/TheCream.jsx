import React from "react";
import Footer from "../components/Footer";
import bg1 from "/image3/bg1.jpg";
import bg2 from "/image3/bg2.jpg";
import bg3 from "/image3/bg3.png";
import bg4 from "/image3/bg6.png";
import bg5 from "/image3/bg5.png"
import bg6 from "/image3/bg4.jpg"
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { useState } from "react";


function TheCream() {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(null);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const sections = [
    {
      title: "DETAILS",
      content: "This is the details content.",
    },
    {
      title: "HOW TO USE",
      content: "Apply gently on clean skin.",
    },
    {
      title: "FULL INGREDIENTS",
      content: "Water, Glycerin, Ceramide, etc.",
    },
  ];

  return (
    <>
      <section className="border border-[#8f6424] mb-[5px]">
      <div className="flex gap-[100px]">
        <div className="bg-[#F7F0E4] w-[600px] h-[700px] ">
          <div className="flex m-[20px] ">
            <div className="mt-[250px]">
              <img
                className="w-[60px] h-[70px] mb-[5px] border-2 border-[#ACACAC] "
                src={bg4}
                alt=""
              />
              <img
                src={bg3}
                className="w-[60px] h-[70px] mb-[5px] border-2 border-[#ACACAC]"
                alt=""
              />
              <img
                src={bg1}
                className="w-[60px] h-[70px] mb-[5px] border-2 border-[#ACACAC]"
                alt=""
              />
              <img
                src={bg2}
                className="w-[60px] h-[70px] border-2 border-[#ACACAC]"
                alt=""
              />
            </div>
            <div>
              <img src={bg4} className="w-[500px] h-[500px]" alt="" />
            </div>
          </div>
        </div>

        <div className="mt-[20px] ">
          <h3 className="text-[25px] font-bold mb-[10px]">
            INTENSIVE MOISTURE CREAM
          </h3>
          <div></div>
          <p className="flex text-[#8f6424] mb-[15px] text-[20px]">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
            <span className="text-[#000000a9] mt-[-1px] text-[15px]">
              {" "}
              (10 reviews)
            </span>
          </p>
          <p className="mb-[25px] text-[24px] font-semibold">$30</p>
          <p className="mb-[20px] text-[16px] font-normal">
            A soft & milky ultra-fine moisturizing mist that forms a thin
            protective <br /> moisture layer and strengthens the skin barrier.
            It instantly replenishes <br /> moisture and imparts a radiant glow,
            effectively solving dryness.
          </p>
          <p className="mb-[20px] font-medium ">
            SIZE: <span className="font-normal">80Ml / 2.02 FL. oz.</span>
          </p>
          <div className="mb-[25px]">
            <h5 className="text-[20px] font-semibold mb-[5px]">QUANTITY</h5>
            <button
              onClick={decrease}
              className="border bg-[#FDF5EB] w-[40px] cursor-pointer h-[40px] "
            >
              -
            </button>
            <button className="border bg-[#FDF5EB] cursor-pointer w-[40px] h-[40px] mr-[10px] ml-[10px]">
              {count}
            </button>
            <button
              onClick={increase}
              className="border bg-[#FDF5EB] cursor-pointer w-[40px] h-[40px]"
            >
              +
            </button>
          </div>
          <button className="text-[#fff] bg-black cursor-pointer w-full p-[8px] mb-[20px]">
            ADD TO CART
          </button>

          <div className="">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-[#C79A63]">
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex justify-between items-center py-5 text-left"
                >
                  <span className="text-[13px] font-medium">
                    {section.title}
                  </span>

                  <span className="text-[18px]">
                    {open === index ? "⌃" : "⌄"}
                  </span>
                </button>

                {open === index && (
                  <div className="pb-5 text-[#555]">{section.content}</div>
                )}
              </div>
            ))}
          </div>


        </div>
      </div>
      </section>

      <section className="m-[10px]">
        <div className="flex">
          <div
          style={{backgroundImage: `url(${bg5})`}}
          className="w-[610px] h-[520px] l-[-10px] bg-center bg-cover"
          >
              <img
              className="w-[590px] ml-[-100px] mt-[-65px] -rotate-10 "
              src={bg4} alt="" />
          </div>
          <div className="overflow-hidden">
              <img className="w-[650px] h-[520px] mt-[-80px] ml-[30px] object-right object-cover scale-125 " src={bg6} alt="" />
          </div>
        </div>
      </section>

      <section>

        <section>
           <div className="flex">
            <div>
                <h4>REVIEWS</h4>
                <p className="flex">4.9 
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <span>(Based on 10 reviews)</span>
                </p>
                <div>
                  
                </div>
            </div>
            <div>
              <button>WRITE A REVIEWS</button>
            </div>
           </div>
        </section>

      </section>
      <Footer />
    </>
  );
}

export default TheCream;
