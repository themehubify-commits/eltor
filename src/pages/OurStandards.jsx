import React from "react";
import Footer from "../components/Footer";
import bg from "/image1/bg.jpg";
import bg1 from "/image1/bg1.png";
import bg2 from "/image1/bg2.jpg";
import bg3 from "/image1/bg3.png";
import bg4 from "/image1/bg4.png";
import bg6 from "/image1/bg6.png";
import bg7 from "/image1/bg.jpg";
import bg8 from "/image1/bg9.png";
import { useState } from "react";

function OurStandards() {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderData = [
    {
      title: "HYDRATION CORE",
      subtitle: "DEEP AND LONG-LASTING HYDRATION",
      image: bg8,
    },
    {
      title: "CERAMIDE",
      subtitle: "BARRIER SUPPORT",
      image: bg3,
    },
    {
      title: "CHAMOMILE",
      subtitle: "CALM & RECOVERY",
      image: bg2,
    },
    {
      title: "MUGWORT EXTRACT",
      subtitle: "SKIN BALANCE & TONE",
      image: bg6,
    },
    {
      title: "ROSA RUGOSA",
      subtitle: "BOTANICAL IDENTITY",
      image: bg4,
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  return (
    <>
      <section className="text-[#FDF5EB]">
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: " -30% center",
          }}
          className="w-full h-[300px] md:h-[480px] bg-center bg-cover bg-[#E9E2D9]"
        >
          <h1 className="text-[40px] md:text-[70px] text-[#8f6424c1] ml-[15px] md:ml-[23px] md:leading-[10.2] leading-[12] pt-[20px]">
            OUR STANDARDS
          </h1>
        </div>

        <section>
          <h5 className="tracking-[2px] text-center text-[#8f6424] underline mt-[60px] md:mt-[90px] mb-[40px] md:mb-[60px]">
            OUR STORY
          </h5>

          <h1 className="tracking-[1px] text-[#8f6424] text-[28px] md:text-[40px] font-medium text-center mb-[20px] px-4">
            FROM MY SKIN TO ELIOR
          </h1>

          <p className="text-[#8f6424] text-center leading-6 font-normal px-4 text-sm md:text-base">
            I have lived with atopic skin since I was one year{" "}
            <br className="hidden md:block" /> For as long as I can remember, my
            skin has needed extra care, patience, and protection. When my skin
            became overwhelmed,
            <br className="hidden md:block" />I learned through years of trial
            and error how to gently bring it back to a place where it felt safe
            again. <br className="hidden md:block" /> ELIOR was created from
            that personal journey. <br className="hidden md:block" /> This cream
            is what I wished had existed for me on my hardest days. I hope it
            becomes a place your skin can return to, too.
          </p>
          <p className="text-[#8f6424] text-center mt-[25px] mb-[30px]">
            Founder of ELIOR
          </p>
        </section>

        <section>
          <div>
            <img
              className="w-full h-[150px] md:h-[300px] object-cover"
              src={bg1}
            />
          </div>
        </section>

        <section className="mt-[60px] md:mt-[100px]">
          <div className="flex flex-col md:flex-row m-[20px] gap-[40px] items-center md:items-start">
            <div>
              <img
                className="h-[400px] md:h-[600px] w-full max-w-[450px] object-cover"
                src={bg2}
              />
            </div>

            <div className="text-center md:text-left">
              <h6 className="text-[#8f6424] underline text-[13px] mb-[40px] md:mb-[80px]">
                OUR PHILOSOPHY
              </h6>
              <h1 className="text-[#8f6424] text-[32px] md:text-[52px] mb-[20px]">
                Our <br /> Uncompromising <br /> Standard
              </h1>
              <p className="text-[#8f6424] text-sm md:text-base">
                When I decided to create this cream, my standard was simple and
                uncompromising: <br className="hidden md:block" /> "Would I
                trust this on my own skin even on its worst days?"{" "}
                <br className="hidden md:block" /> I chose ingredients that
                focused on calm, balance, and recovery.{" "}
                <br className="hidden md:block" />
                Plant-derived components with minimal irritation.{" "}
                <br className="hidden md:block" />
                Patented Rosa Rugosa and Magnolia Bark extract for gentle
                resilience. <br className="hidden md:block" /> A formulation
                centered on hydration and barrier support not quick fixes, not
                pressure, <br className="hidden md:block" />
                not performance for show. <br className="hidden md:block" />
                This cream had to work for me first. Only then could it exist
                for anyone else.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h6 className="text-[#8f6424] underline text-[22px] md:text-[30px] font-semibold mt-[60px] md:mt-[80px] mb-[40px] md:mb-[60px] ml-[15px] md:ml-[25px]">
            KEY BENEFIT 01
          </h6>

          <h1 className="font-medium text-[36px] md:text-[70px] mb-[10px] text-[#8f6424] ml-[15px] md:ml-[25px]">
            SKIN BARRIER RECOVERY
          </h1>
          <p className="text-[#8f6424] ml-[15px] md:ml-[25px] mb-[16px]">
            SO THE SKIN CAN PROTECT ITSELF
          </p>
          <hr className="ml-[15px] md:ml-[25px] w-[90%] md:w-[900px] text-[#8f6424] p-[5px]" />

          <div className="flex flex-col md:flex-row gap-[20px] ml-[15px] md:ml-[25px] mt-[20px]">
            <div>
              <h4 className="text-[#8f6424] mb-[10px] font-bold text-[18px]">
                CERAMIDE
              </h4>
              <p className="text-[#8f6424] mb-[10px]">
                Rebuild the skin barrier and protectr the skin <br /> from
                external stressors
              </p>
              <img
                className="w-full max-w-[280px] h-auto md:h-[300px]"
                src={bg3}
              />
            </div>
            <div>
              <h4 className="text-[#8f6424] mb-[10px] font-bold text-[18px]">
                VITAMIN B5
              </h4>
              <p className="text-[#8f6424] mb-[10px]">
                Strengthens the skin barrier while soothing <br /> and restoring
                sensitive skin
              </p>
              <img
                className="w-full max-w-[280px] h-auto md:h-[300px]"
                src={bg4}
              />
            </div>
            <div className="hidden md:block">
              <img
                className="w-[402px] h-[550px] mt-[-170px] ml-[70px] -rotate-30"
                src={bg6}
              />
            </div>
          </div>
        </section>

        <section className="text-[#8f6424] mt-[60px] md:mt-0">
          <h5 className="text-[12px] text-center md:text-left md:ml-[45%] mb-[30px]">
            KEY BENEFIT 02
          </h5>

          <h1 className="text-[32px] md:text-[50px] text-center md:text-left md:ml-[17%] px-4">
            DEEP HYDRATION & SKIN BALANCE
          </h1>
          <br />
          <div
            style={{
              backgroundImage: `url(${bg7})`,
              backgroundPosition: "-25% center",
            }}
            className="w-full h-auto bg-center bg-cover py-[30px]"
          >
            <section className="text-[#8f6424] ml-[20px] md:ml-[80px] mt-[30px] pr-[20px]">
              <h5 className="text-[12px] mb-[20px] mt-[50px]">
                KEY BENEFIT 03
              </h5>
              <h1 className="text-[28px] md:text-[40px] mb-[40px] font-medium">
                PIANT-DERIVED <br /> INGREDIENTS
              </h1>
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold">
                  ROSA RUGOSA
                </h3>
                <p className="mt-[10px] mb-[20px]">
                  Sooth the skin and supports its natural recovery
                </p>
                <hr className="w-full max-w-[380px]" />
              </div>
              <div className="mt-[30px]">
                <h3 className="text-[18px] md:text-[20px] font-bold">
                  CAAMOMLIE
                </h3>
                <p className="mt-[10px] mb-[20px]">
                  Soothes sensitive skin and helps calm daily irritation
                </p>
                <hr className="w-full max-w-[380px]" />
              </div>
              <div className="mt-[30px]">
                <h3 className="text-[18px] md:text-[20px] font-bold">
                  MUGWORT EXTRACT
                </h3>
                <p className="mt-[10px] mb-[20px]">
                  Restore a balanced skin condition
                </p>
                <hr className="w-full max-w-[380px]" />
              </div>
            </section>
          </div>
        </section>

        {/* -----------slider------------ */}

        <section className="text-[#8f6424] mt-[80px] md:mt-[140px] px-[15px] md:px-[40px] mb-[100px]">
          <h4 className="mb-[20px]">MAIN INGREDIENT</h4>

          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[150px]">
            {/* LEFT CONTENT */}

            <div>
              <div className="text-[28px] md:text-[40px]">
                (0{activeSlide + 1})
                <h1 className="mt-2">{sliderData[activeSlide].title}</h1>
                <p className="text-[#8F64244D] text-[22px] md:text-[32px] mt-4">
                  {sliderData[activeSlide].subtitle}
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div>
              <h5 className="mb-[10px]">{sliderData[activeSlide].subtitle}</h5>

              <img
                src={sliderData[activeSlide].image}
                alt=""
                className="
          w-full
          max-w-[600px]
          h-[300px]
          md:h-[380px]
          object-cover
          transition-all
          duration-500
        "
              />
            </div>
          </div>

          {/* THUMBNAILS */}

          <div className="flex items-center gap-3 mt-10 overflow-x-auto pb-3">
            {sliderData.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`
          min-w-[160px]
          md:min-w-[190px]
          cursor-pointer
          border
          transition-all
          duration-300

          ${
            activeSlide === index
              ? "border-[#8f6424] scale-105"
              : "border-[#d8c4a5] opacity-70"
          }
        `}
              >
                <div className="flex bg-[#F7F0E4]">
                  <div className="p-2 flex-1">
                    <h4 className="text-[10px] font-semibold">{item.title}</h4>

                    <p className="text-[9px] mt-1">{item.subtitle}</p>
                  </div>

                  <img
                    src={item.image}
                    alt=""
                    className="w-[65px] h-[65px] object-cover"
                  />
                </div>
              </div>
            ))}

            {/* ARROWS */}

            <div className="flex gap-2 ml-3">
              <button
                onClick={prevSlide}
                className="
          w-[45px]
          h-[45px]
          border
          border-[#8f6424]
          cursor-pointer
        "
              >
                ‹
              </button>

              <button
                onClick={nextSlide}
                className="
          w-[45px]
          h-[45px]
          border
          border-[#8f6424]
          cursor-pointer
        "
              >
                ›
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default OurStandards;
