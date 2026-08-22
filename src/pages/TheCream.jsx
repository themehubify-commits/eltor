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
import { useNavigate } from "react-router-dom";


function TheCream() {
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(null);
  const [selectedImage, setSelectedImage] = useState(bg4)
  const navigate = useNavigate()
  
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



  const handleAddToCart = () => {
  const product = {
    id: 1,
    name: "Intensive Moisture Cream",
    price: 30,
    quantity: count,
    image: selectedImage,
  };

  localStorage.setItem("cart", JSON.stringify(product));

     navigate("/cart")
}
  
  return (
    <>
      <section className="border border-[#8f6424] mb-[5px]">
      <div className="flex flex-col md:flex-row gap-[40px] md:gap-[100px]">
        <div className="bg-[#F7F0E4] w-full md:w-[600px] h-auto md:h-[700px] ">
          <div className="flex flex-col-reverse md:flex-row m-[20px] gap-[15px] md:gap-20">
            <div className="flex md:flex-col flex-row mt-0 md:mt-[250px] gap-[5px] md:gap-0 justify-center md:justify-start">
              <img
              onClick={() => setSelectedImage(bg4)}
                className="w-[60px] h-[70px] mb-0 md:mb-[5px] border-2 border-[#ACACAC] cursor-pointer"
                src={bg4}
                alt=""
              />
              <img
              onClick={() => setSelectedImage(bg3)}
                src={bg3}
                className="w-[60px] h-[70px] mb-0 md:mb-[5px] border-2 border-[#ACACAC] cursor-pointer"
                alt=""
              />
              <img
              onClick={() => setSelectedImage(bg1)}
                src={bg1}
                className="w-[60px] h-[70px] mb-0 md:mb-[5px] border-2 border-[#ACACAC] cursor-pointer "
                alt=""
              />
              <img
              onClick={() => setSelectedImage(bg2)}
                src={bg2}
                className="w-[60px] h-[70px] border-2 border-[#ACACAC] cursor-pointer"
                alt=""
              />
            </div>
            <div>
              <img src={selectedImage} className="w-full max-w-[500px] h-[450px] md:h-[500px] cursor-pointer" alt="" />
            </div>
          </div>
        </div>

        <div className="mt-[20px] px-[20px] md:px-0">
          <h3 className="text-[22px] md:text-[25px] font-bold mb-[10px]">
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
            protective <br className="hidden md:block" /> moisture layer and strengthens the skin barrier.
            It instantly replenishes <br className="hidden md:block" /> moisture and imparts a radiant glow,
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
          <button
          onClick={handleAddToCart}
          className="text-[#fff] bg-black cursor-pointer w-full p-[8px] mb-[20px]">
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
        <div className="flex flex-col md:flex-row">
          <div
          style={{backgroundImage: `url(${bg5})`}}
          className="w-full md:w-[610px] h-[400px] md:h-[500px] bg-center bg-cover overflow-hidden"
          >
              <img
              className="w-full max-w-[590px] md:h-[560px] h-[400px] md:ml-[-105px] ml-[-82px] md:mt-[-53px] mt-[5px] md:-rotate-10 -rotate-12 "
              src={bg4} alt="" />
          </div>
          <div className="overflow-hidden">
              <img className="w-full md:w-[650px] h-[400px] md:h-[520px] mt-0 md:mt-[-80px] ml-0 md:ml-[30px] object-right object-cover scale-125 " src={bg6} alt="" />
          </div>
        </div>
      </section>

      <section className="m-[20px] md:m-[95px]">

        <section className="mb-[30px]">
           <div className="flex flex-col md:flex-row gap-[20px] md:gap-[650px]">
            <div>
                <h4 className="text-[24px] font-semibold mb-[20px]">REVIEWS</h4>
                <p className="flex flex-wrap items-center mb-[15px] text-[20px] text-[#000] font-normal gap-[5px]">4.9 
                  <span className=" flex text-[#8f6424] mt-[5px]">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  </span>
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
            
            <div className="mt-0 md:mt-[180px]">
              <button className=" bg-black text-[#fff] p-[8px] cursor-pointer">WRITE A REVIEWS</button>
            </div>
           </div>
        </section>
        <hr />
         <h4 className="mt-[20px] mb-[20px]">Highest Rating <span className="cursor-pointer">⌄</span></h4>
         <hr className="text-[#8f6424]" />

         <section className="mt-[50px] mb-[20px]">
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[70px] ">

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
                <p className="text-[11px]">I am new to face serums as I have only used creams and oils so far. This product is a game changer in my morning routine. The serum hydrates my skin all day and is super easy to <br className="hidden md:block" /> apply - or tap in my face. I feel like a dermatologist now : </p>
            </div>
            <div>
                 <p className="mt-0 md:mt-[-20px] ml-0 md:ml-[-70px]">2 days ago</p>
            </div>
          </div>
         </section>
         <hr />
         <section className="mt-[50px] mb-[20px]">
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[70px] ">

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
                <p className="text-[11px]">I am new to face serums as I have only used creams and oils so far. This product is a game changer in my morning routine. The serum hydrates my skin all day and is super easy to <br className="hidden md:block" /> apply - or tap in my face. I feel like a dermatologist now : </p>
            </div>
            <div>
                 <p className="mt-0 md:mt-[-20px] ml-0 md:ml-[-70px]">2 days ago</p>
            </div>
          </div>
         </section>
          <hr />
         <section className="mt-[50px] ">
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-[70px] ">

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
                <p className="text-[11px]">I am new to face serums as I have only used creams and oils so far. This product is a game changer in my morning routine. The serum hydrates my skin all day and is super easy to <br className="hidden md:block" /> apply - or tap in my face. I feel like a dermatologist now : </p>
            </div>
            <div>
                 <p className="mt-0 md:mt-[-20px] ml-0 md:ml-[-70px]">2 days ago</p>
            </div>
          </div>
         </section>
         <div className="flex justify-center md:justify-start">
           <button className="bg-black text-[#fff] mt-[80px] md:ml-[50%] text-[15px] cursor-pointer w-[130px] p-[6px]">SHOW MORE</button>
         </div>
      </section>
      <Footer />
    </>
  );
}

export default TheCream;