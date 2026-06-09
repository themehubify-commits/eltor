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

    const ratings = [
    { star: 5, count: 9, width: "90%" },
    { star: 4, count: 1, width: "10%" },
    { star: 3, count: 0, width: "0%" },
    { star: 2, count: 0, width: "0%" },
    { star: 1, count: 0, width: "0%" },
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

      <section className="m-[95px]">

        <section className="mb-[30px]">
           <div className="flex gap-[650px]">
            <div>
                <h4 className="text-[24px] font-semibold mb-[20px]">REVIEWS</h4>
                <p className="flex mb-[15px] text-[20px] text-[#000] font-normal gap-[5px]">4.9 
                  <p className=" flex text-[#8f6424] mt-[5px]">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  </p>
                  <span className="text-[#00000090] ml-[5px] text-[12px] mt-[7px]">(Based on 10 reviews)</span>
                </p>
                <div>
  {ratings.map((item) => (
    <div key={item.star}
    className="flex items-center gap-3"
    >
      
      <div className="flex items-center gap-1 text-[#8f6424]">
        <span>{item.star}</span>
        <IoMdStar />
      </div>

      <div className="flex-1 h-2 bg-gray-200 rounded">
        <div
        className="h-full bg-yellow-700 rounded"
          style={{ width: item.width }}
        ></div>
      </div>

      <span>{item.count}</span>

    </div>
  ))}
</div>
            </div>
            
            <div className="mt-[180px]">
              <button className=" bg-black text-[#fff] p-[8px] cursor-pointer">WRITE A REVIEWS</button>
            </div>
           </div>
        </section>
        <hr />
         <h4 className="mt-[20px] mb-[20px]">Highest Rating <span className="cursor-pointer">⌄</span></h4>
         <hr className="text-[#8f6424]" />

         <section className="mt-[50px] mb-[20px]">
          <div className="flex gap-[70px] ">

            <div>
              <h4>Elior Kim</h4>
            </div>
            <div>
              <h1 className="text-[#8f6424] mb-[15px] flex">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </h1>
                <h4 className="mb-[15px]">Cant stop using it!</h4>
                <p className="text-[11px]">I am new to face serums as I have only used creams and oils so far. This product is a game changer in my morning routine. The serum hydrates my skin all day and is super easy to <br /> apply - or tap in my face. I feel like a dermatologist now :) </p>
            </div>
            <div>
                 <p className="mt-[-20px] ml-[-70px]">2 days ago</p>
            </div>
          </div>
         </section>
         <hr />
         <section className="mt-[50px] mb-[20px]">
          <div className="flex gap-[70px] ">

            <div>
              <h4>Elior Kim</h4>
            </div>
            <div>
              <h1 className="text-[#8f6424] mb-[15px] flex">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </h1>
                <h4 className="mb-[15px]">Cant stop using it!</h4>
                <p className="text-[11px]">I am new to face serums as I have only used creams and oils so far. This product is a game changer in my morning routine. The serum hydrates my skin all day and is super easy to <br /> apply - or tap in my face. I feel like a dermatologist now :) </p>
            </div>
            <div>
                 <p className="mt-[-20px] ml-[-70px]">2 days ago</p>
            </div>
          </div>
         </section>
          <hr />
         <section className="mt-[50px] ">
          <div className="flex gap-[70px] ">

            <div>
              <h4>Elior Kim</h4>
            </div>
            <div>
              <h1 className="text-[#8f6424] mb-[15px] flex">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </h1>
                <h4 className="mb-[15px]">Cant stop using it!</h4>
                <p className="text-[11px]">I am new to face serums as I have only used creams and oils so far. This product is a game changer in my morning routine. The serum hydrates my skin all day and is super easy to <br /> apply - or tap in my face. I feel like a dermatologist now :) </p>
            </div>
            <div>
                 <p className="mt-[-20px] ml-[-70px]">2 days ago</p>
            </div>
          </div>
         </section>
         <button className="bg-black text-[#fff] mt-[80px] ml-[50%] text-[15px] cursor-pointer w-[130px] p-[6px]">SHOW MORE</button>
      </section>
      <Footer />
    </>
  );
}

export default TheCream;
