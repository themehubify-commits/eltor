import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import Footer from "../components/Footer";
import bg from "/image/hero.jpg";
import skin from "/image/Rectangle.png";
import flower from "/image/flower.png";
import flower1 from "/image/flower1.png";
import flower2 from "/image/flower2.png";
import flower3 from "/image/flower3.png";
import flower4 from "/image/flower4.png";
import flower5 from "/image/flower5.png";
import bgImage from "/image/bg-image.png";
import bgImage1 from "/image/bg-image1.png";
import bgImage2 from "/image/bg-image2.png";
import eliorImage from "/image/elior.png";
import bodyImage from "/image/bodyImage.png";
import bodyImage2 from "/image/bodyImage2.png";

function Home() {
  return (
    <>
      {/* section 1 */}
<div
  style={{ backgroundImage: `url(${bg})` }}
  className="
    h-screen
    bg-center bg-cover
    px-5 md:px-12 lg:px-[50px]
    pt-[180px] md:pt-[250px] lg:pt-[300px]
    w-full
  "
> <div className="mb-[-50px]">

          <div className="max-w-[474px] ">
            <h2 className="font-semibold text-[28px] md:text-[40px] text-[#8f6424] ">
              RETURN TO SAFETY
            </h2>

            <p className="text-[#8f6424] text-sm md:text-base">
              {" "}
              A GENTLE,CLINICALLY TESTED DREAM DESIGNED TO <br /> RESTORE CALM
              AND COMFORT TO YOUR SKIN.
            </p>
          </div>

          <button className="bg-[#8F6424]  text-[#fff]  p-[5px] cursor-pointer ">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* section 2 */}
      <div className="flex flex-col lg:flex-row mt-[10px] mb-[60px]">
        <div className="w-full lg:w-1/2">
          <img src={skin} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="bg-[#8F6424] text-[#fff] lg:w-1/2">
          <div className=" m-5 md:m-[30px]">
            <div className="flex justify-between text-[12px] text-[#bbb] mb-[70px]">
              <p>BENEFIT</p>
              <p>INTENSIVE MOISTURE CREAM</p>
            </div>
            <div className="w-full lg:w-[600px]  ">
              <h1 className="text-[30px] md:text-[50px] font-normal leading-none mb-[20px] md:mb-[40px]">
                Formulated for extremely <br /> dry and sensitive skin
              </h1>
              <p className="text-[#FDF5EB]">
                The elior cream delivers instant moisture and long lasting
                hydration while preventing moisture loss to keep the skin soft,
                supple, and comfortable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className=" mx-5 md:m-[150px]">
        <h1 className="text-[#8F6424] text-center mb-[50px] md:text-[38px] text-[28px] leading-none">
          We choose only trusted ingredients, <br />
          to help the skin recover on its own
        </h1>

        <div className="">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:mb-[60px] gap-10  text-center md:text-left">
            <div>
              <img
                className="w-full max-w-[260px] md:h-[300px] object-cover md:mb-[10px] md:ml-[0px] ml-[80px]"
                src={flower}
                alt=""
              />
              <p>Jasmine</p>
            </div>
            <div>
              <img
               className="w-full max-w-[260px] h-[300px] object-cover mb-[10px]  md:ml-[0px] ml-[80px]"
                src={flower1}
                alt=""
              />
              <p>Jasmine</p>
            </div>
            <div>
              <img
                className="w-full max-w-[260px] h-[300px] object-cover mb-[10px]  md:ml-[0px] ml-[80px]"
                src={flower2}
                alt=""
              />
              <p>Mugwort</p>
            </div>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center md:text-left">
            <div>
              <img
               className="w-full max-w-[260px] h-[300px] object-cover mb-[10px]  md:ml-[0px] ml-[80px]"
                src={flower3}
                alt=""
              />
              <p>Centella Leaf</p>
            </div>
            <div>
              <img
                className="w-full max-w-[260px] h-[300px] object-cover mb-[10px]  md:ml-[0px] ml-[80px]"
                src={flower4}
                alt=""
              />
              <p>Chamomile</p>
            </div>
            <div className="mb-[30px] md:mb-[0px]">
              <img
               className="w-full max-w-[260px] h-[300px] object-cover mb-[10px]  md:ml-[0px] ml-[80px]"
                src={flower5}
                alt=""
              />
              <p>Hyaluronic Acid</p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}

      <div className="flex flex-col lg:flex-row mb-[80px]">
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="w-full lg:w-1/2 h-[300px] lg:h-[430px]  bg-center bg-cover "
        >
          <h1 className=" text-[#ffffff] text-[25px] ml-[50px] tracking-[1px] mt-[30px]">
            CLINICALLY TESTED
          </h1>
        </div>
        <div
          style={{ backgroundImage: `url(${bgImage1})` }}
          className="w-full lg:w-1/2 h-[300px] lg:h-[430px]   bg-center bg-cover "
        >
          <h1 className="text-[#ffffff] text-[25px] ml-[50px] tracking-[1px] mt-[30px]">
            PATENE-BACKED
          </h1>
        </div>
      </div>

      {/* section 5 */}

      <div className="flex flex-col lg:flex-row md:gap-[160px] gap-[30px] m-5 md:m-[20px] mb-[100px]">
        <div
          style={{ backgroundImage: `url(${bgImage2})` }}
          className="w-full lg:w-[600px] h-[500px] lg:h-[600px] bg-center bg-cover "
        >
          <div className="flex flex-col md:flex-row justify-between px-5 pt-5">
            <div className="text-[#fff] text-[24px] md:text-[30px]">
              One cream. Built for safety.
            </div>
            <div>
              <button className="md:cursor-pointer cursor-pointer bg-[#fff] text-[#8f6424] p-[8px] mt-[10px] w-[130px]">
                SHOP NOW
              </button>
            </div>
          </div>

          <img
            className="w-full max-w-[620px] lg:h-[540px] h-[390px]  mx-auto -rotate-11 mt-[-50px] md:ml-[-110px] ml-[-80px]"
            src={eliorImage}
            alt=""
          />
        </div>
        <div>
          <h1 className="md:text-[55px] text-[35px] text-center text-[#8f64246c]">
            OUR PRODUCT
          </h1>
          <img
            className="max-w-[400px] w-full mx-auto h-auto"
            src={eliorImage}
            alt=""
          />
          <h4 className="text-center mb-[5px] font-bold text-[20px]">
            INTENSIVE MOISTURE CREAM
          </h4>
          <p className="text-center mb-[20px] text-[#00000086]">
            80ML / 2.02 FL. oz.
          </p>
          <p className="text-center">$30</p>
        </div>
      </div>

      {/* section 6 */}

      <div className="mb-[30px]">
        <h1 className="text-[30px] text-[#8f6424] text-center mb-[30px]">
          WITH REAL REVIEWS
        </h1>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col md:flex-row w-full">
            <div>
              <img
               className=" w-full md:w-[300px]  md:h-[450px]  h-[500px]  px-4 py-8 md:px-0 md:py-0"
                src={bodyImage}
                alt="bodyImage"
              />
            </div>
            <div className="bg-[#8f6424] md:w-[300px] md:h-[450px] text-center ">
              <div className="mt-[60%] md:mt-[350px] text-center">
                <div className="flex text-[#fff] justify-center  ">
                  <h1 className="mt-[-100px] flex ">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  </h1>
                </div>
                <p className="text-[#fff] mb-[20px] mt-[-200px] ">
                  “ I have been using this for two weeks and my skin feels so
                  much calmer and hydrated. The texture is light but still
                  nourishing perfect for daily use! “
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full">
            <div>
              <img
              className=" w-full md:w-[330px] md:h-[450px] h-[492px] text-center px-4 py-8 md:px-0 md:py-0"
                src={bodyImage2}
                alt="bodyImage"
              />
            </div>
            <div className="bg-[#8f6424] md:w-[330px] md:h-[450px] text-center ">
              <div className="mt-[60%] md:mt-[350px] ">
                <div className="flex text-[#fff] justify-center mb-[5px]">
                  <h1 className="flex mt-[-100px]">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  </h1>
                </div>
                <p className="text-[#fff] mb-[20px] mt-[-200px] ">
                  “ I have been using this for two weeks and my skin feels so
                  much calmer and hydrated. The texture is light but still
                  nourishing perfect for daily use! “
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
