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
        className="h-screen  bg-center bg-cover 
          pt-[300px] pr-[130px] pb-[400px] pl-[50px] gap-[30px] w-[1264px] h-[400px] top-[115px]
         "
      >
        <div className="mb-[-50px]">
          <div className=" w-[474px] h-[133px] gap-[5px]">
            <h2 className="font-semibold text-[40px] text-[#8f6424] ">
              RETURN TO SAFETY
            </h2>

            <p className="text-[#8f6424]">
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
      <div className="flex mb-[80px]">
        <div className="w-[1000px]">
          <img src={skin} alt="" />
        </div>
        <div className="bg-[#8F6424] text-[#fff]">
          <div className="m-[30px]">
            <div className="flex justify-between text-[12px] text-[#bbb] mb-[70px]">
              <p>BENEFIT</p>
              <p>INTENSIVE MOISTURE CREAM</p>
            </div>
            <div className="w-[600px] h-[192px] top-[170px] ">
              <h1 className="text-[50px] font-normal leading-none mb-[40px]">
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
      <div className="m-[150px]">
        <h1 className="text-[#8F6424] text-center mb-[50px] text-[38px] leading-none">
          We choose only trusted ingredients, <br />
          to help the skin recover on its own
        </h1>

        <div className="">
          <div className="flex gap-[60px] mb-[60px]">
            <div>
              <img
                className="w-[260px] h-[300px] left-[355px] mb-[10px]"
                src={flower}
                alt=""
              />
              <p>Jasmine</p>
            </div>
            <div>
              <img
                className="w-[260px] h-[300px] left-[355px] mb-[10px]"
                src={flower1}
                alt=""
              />
              <p>Jasmine</p>
            </div>
            <div>
              <img
                className="w-[260px] h-[300px] left-[355px] text-[#ddd] mb-[10px]"
                src={flower2}
                alt=""
              />
              <p>Mugwort</p>
            </div>
          </div>
          <div className="flex gap-[60px]">
            <div>
              <img
                className="w-[260px] h-[300px] left-[355px] mb-[10px]"
                src={flower3}
                alt=""
              />
              <p>Centella Leaf</p>
            </div>
            <div>
              <img
                className="w-[260px] h-[300px] left-[355px] mb-[10px]"
                src={flower4}
                alt=""
              />
              <p>Chamomile</p>
            </div>
            <div>
              <img
                className="w-[260px] h-[300px] left-[355px] mb-[10px]"
                src={flower5}
                alt=""
              />
              <p>Hyaluronic Acid</p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}

      <div className="flex mb-[80px]">
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="w-[635px]  h-[430px]  bg-center bg-cover top-[3500px] left-px "
        >
          <h1 className=" text-[#ffffff] text-[25px] ml-[50px] tracking-[1px] mt-[30px]">
            CLINICALLY TESTED
          </h1>
        </div>
        <div
          style={{ backgroundImage: `url(${bgImage1})` }}
          className="w-[635px] h-[430px]   bg-center bg-cover top-[3500px]"
        >
          <h1 className="text-[#ffffff] text-[25px] ml-[50px] tracking-[1px] mt-[30px]">
            PATENE-BACKED
          </h1>
        </div>
      </div>

      {/* section 5 */}

      <div className="flex  gap-[20px]  m-[20px] mb-[100px]">
        <div
          style={{ backgroundImage: `url(${bgImage2})` }}
          className=" w-[600px] h-[600px] top-[4000px]   bg-center bg-cover left-[40px] "
        >
          <div className="flex gap-[75px] mt-[20px]">
            <div className="text-[#fff] text-[30px]">
              One cream. Built for safety.
            </div>
            <div>
              <button className="cursor-pointer bg-[#fff] text-[#8f6424] p-[8px] mt-[10px] w-[130px]">
                SHOP NOW
              </button>
            </div>
          </div>

          <img
            className="mr-[500px] mt-[65px] h-[500px] w-[450px] "
            src={eliorImage}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-[55px] ml-[150px] text-[#8f64246c]">
            OUR PRODUCT
          </h1>
          <img
            className="w-[400px] h-[400px] top-[4000px] left-[1100px] ml-[120px]"
            src={eliorImage}
            alt=""
          />
          <h4 className="ml-[180px] mb-[5px] font-bold text-[20px]">
            INTENSIVE MOISTURE CREAM
          </h4>
          <p className="ml-[250px] mb-[20px] text-[#00000086]">
            80ML / 2.02 FL. oz.
          </p>
          <p className="ml-[290px]">$30</p>
        </div>
      </div>

      {/* section 6 */}

      <div className="mb-[30px]">
        <h1 className="text-[30px] text-[#8f6424] text-center mb-[30px]">
          WITH REAL REVIEWS
        </h1>
        <div className="flex">
          <div className="flex">
            <div>
              <img
                className="w-[310px] h-[400px]"
                src={bodyImage}
                alt="bodyImage"
              />
            </div>
            <div className="bg-[#8f6424] w-[330px] text-center ">
              <div className="mt-[40%]">
                <div className="flex text-[#fff] ml-[120px] mb-[5px]">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p className="text-[#fff]">
                  “ I have been using this for two weeks and my skin feels so
                  much calmer and hydrated. The texture is light but still
                  nourishing perfect for daily use! “
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <div>
              <img
                className="w-[300px] h-[400px]"
                src={bodyImage2}
                alt="bodyImage"
              />
            </div>
            <div className="bg-[#8f6424] w-[330px] text-center ">
              <div className="mt-[40%]">
                <div className="flex text-[#fff] ml-[120px] mb-[5px]">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </div>
                <p className="text-[#fff]">
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
