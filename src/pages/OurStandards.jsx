import React from "react";
import Footer from "../components/Footer";
import bg from "/image1/bg.jpg";
import bg1 from "/image1/bg1.png";
import bg2 from "/image1/bg2.jpg";
import bg3 from "/image1/bg3.png";
import bg4 from "/image1/bg4.png";
import bg6 from "/image1/bg6.png";
import bg7 from "/image1/bg.jpg";
import bg8 from "/image1/bg9.png"

function OurStandards() {
  return (
    <>
      <section className="text-[#FDF5EB]">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="w-[1263px] h-[480px] t-[100px] bg-center bg-cover bg-[#E9E2D9] h-screen"
        >
          <h1 className="text-[70px] text-[#fff]   ml-[25px] leading-200">
            OUR STANDARDS
          </h1>
        </div>

        <section>
          <h5 className="tracking-[2px] text-center text-[#8f6424] underline mt-[90px] mb-[60px]">
            OUR STORY
          </h5>

          <h1 className="tracking-[1px] text-[#8f6424] text-[40px] font-medium text-center mb-[20px]">
            FROM MY SKIN TO ELIOR
          </h1>

          <p className="text-[#8f6424] text-center leading-6 font-normal">
            I have lived with atopic skin since I was one year <br /> For as
            long as I can remember, my skin has needed extra care, patience, and
            protection. When my skin became overwhelmed,
            <br />I learned through years of trial and error how to gently bring
            it back to a place where it felt safe again. <br /> ELIOR was
            created from that personal journey. <br /> This cream is what I
            wished had existed for me on my hardest days. I hope it becomes a
            place your skin can return to, too.
          </p>
          <p className="text-[#8f6424] text-center mt-[25px] mb-[30px]">
            Founder of ELIOR
          </p>
        </section>

        <section>
          <div>
            <img
              className="w-[1263px] h-[300px] t-[1700px] l-[1px]"
              src={bg1}
            />
          </div>
        </section>

        <section className="mt-[100px]">
          <div className="flex m-[20px] gap-[40px]">
            <div>
              <img
                className="h-[600px] w-[450px] t-[200px] l-[40px]"
                src={bg2}
              />
            </div>

            <div>
              <h6 className="text-[#8f6424] underline text-[13px] mb-[80px]">
                OUR PHILOSOPHY
              </h6>
              <h1 className="text-[#8f6424] text-[52px] mb-[20px]">
                Our <br /> Uncompromising <br /> Standard
              </h1>
              <p className="text-[#8f6424]">
                When I decided to create this cream, my standard was simple and
                uncompromising: <br /> “Would I trust this on my own skin even
                on its worst days?” <br /> I chose ingredients that focused on
                calm, balance, and recovery. <br />
                Plant-derived components with minimal irritation. <br />
                Patented Rosa Rugosa and Magnolia Bark extract for gentle
                resilience. <br /> A formulation centered on hydration and
                barrier support not quick fixes, not pressure, <br /> not
                performance for show. <br />
                This cream had to work for me first. Only then could it exist
                for anyone else.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h6 className="text-[#8f6424] underline text-[30px] font-semibold mt-[80px] mb-[60px] ml-[25px]">
            KEY BENEFIT 01
          </h6>

          <h1 className="font-medium text-[70px] mb-[10px] text-[#8f6424] ml-[25px]">
            SKIN BARRIER RECOVERY
          </h1>
          <p className="text-[#8f6424] ml-[25px] mb-[16 0px]">
            SO THE SKIN CAN PROTECT ITSELF
          </p>
          <hr className="ml-[25px] w-[900px] text-[#8f6424] p-[5px]" />

          <div className="flex gap-[20px] ml-[25px]">
            <div>
              <h4 className="text-[#8f6424] mb-[10px] font-bold text-[18px]">
                CERAMIDE
              </h4>
              <p className="text-[#8f6424] mb-[10px]">
                Rebuild the skin barrier and protectr the skin <br /> from
                external stressors
              </p>
              <img className="w-[280px] h-[300px]" src={bg3} />
            </div>
            <div>
              <h4 className="text-[#8f6424] mb-[10px] font-bold text-[18px]">
                VITAMIN B5
              </h4>
              <p className="text-[#8f6424] mb-[10px]">
                Strengthens the skin barrier while soothing <br /> and restoring
                sensitive skin
              </p>
              <img className="w-[280px] h-[300px]" src={bg4} />
            </div>
            <div>
              <img className="w-[402px] h-[550px]  mt-[-170px] ml-[70px] -rotate-30 " src={bg6} />
            </div>
          </div>
        </section>

        <section className="text-[#8f6424] ">
          <h5 className="text-[12px] ml-[45%] mb-[30px]">KEY BENEFIT 02</h5>

          <h1 className="text-[50px] ml-[17%]">
            DEEP HYDRATION & SKIN BALANCE
          </h1>
          <br />
          <div
            style={{ backgroundImage: `url(${bg7})` }}
            className="w-[1264px] h-[1000px] t-[500px] 
          bg-center bg-cover h-screen "
          >
            <section className="text-[#8f6424]  ml-[80px] mt-[30px]">
              <h5 className="text-[12px] mb-[20px] mt-[50px]">
                KEY BENEFIT 03
              </h5>
              <h1 className="text-[40px] mb-[40px] font-medium">
                PIANT-DERIVED <br /> INGREDIENTS
              </h1>
              <div>
                <h3 className="text-[20px] font-bold">ROSA RUGOSA</h3>
                <p className="mt-[10px] mb-[20px] ">
                  Sooth the skin and supports its natural recovery
                </p>
                <hr className="w-[380px]" />
              </div>
              <div className="mt-[30px]">
                <h3 className="text-[20px] font-bold">CAAMOMLIE</h3>
                <p className="mt-[10px] mb-[20px] ">
                  Soothes sensitive skin and helps calm daily irritation
                </p>
                <hr className="w-[380px]" />
              </div>
              <div className="mt-[30px]">
                <h3 className="text-[20px] font-bold">MUGWORT EXTRACT</h3>
                <p className="mt-[10px] mb-[20px] ">
                  Restore a balanced skin condition
                </p>
                <hr className="w-[380px]" />
              </div>
            </section>
          </div>
        </section>
        <section className="text-[#8f6424] mt-[140px] m-[30px] mb-[100px]">
          <h4 className="mb-[20px]">MAIN INGREDIENT</h4>
          <div className="flex gap-[100px]">
            <div>
              <p className="text-[40px]">
                (1)
                <h1>
                  HYDRATION CORE{" "} <br />
                  <span className="text-[#8F64244D]">
                    BARRIER SUPPORT <br /> CALM & RECOVERY <br /> SKIN BALANCE & TONE <br />
                    BOTANICAL IDENTITY{" "}
                  </span>
                </h1>
              </p>
            </div>
            <div>
              <h5>DEEP AND LONG-LASTING HY DRATION</h5>
              <img className="w-[600px] h-[300px] mt-[10px] l-[700px]]" src={bg8} />
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default OurStandards;
