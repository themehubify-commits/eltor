import React from "react";
import Footer from "../components/Footer";
import bg from "/image2/bg.png";
import bg1 from "/image2/bg4.png";
import bg2 from "/image2/bg1.jpg";
import bg3 from "/image2/bg8.png";
import bg4 from "/image2/bg9.png";
import bg5 from "/image2/bg10.png";
import bg6 from "/image2/bg7.jpg";
import bg7 from "/image2/bg2.png";
import bg8 from "/image2/bg3.png";
import bg9 from "/image2/bg5.png";
import bg10 from "/image2/bg-image2.png"
import bg11 from "/image2/bg6.png"

function Sclence() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${bg})` }}
        className="w-full h-[300px] md:h-[500px] bg-cover bg-center flex items-end"
      >
        <h1 className="text-white text-[40px] md:text-[70px] font-light mb-6 md:mb-10 ml-4 md:ml-10">
          THE SCIENCE
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 text-[#8f6424]">
        <h5 className="text-sm tracking-[3px] underline text-center mb-[40px] md:mb-[60px]">
          OUR TECHNOLOGY
        </h5>

        <h3 className="text-3xl md:text-5xl mb-6 text-center">THE SCIENCE BEHIND ELIOR</h3>

        <p className="text-base md:text-lg text-center mb-[40px] md:mb-[60px]">
          Clinical testing and patented technology designed with safety as the
          first priority.
        </p>

        <img
          src={bg1}
          alt="Science"
          className="w-full h-[220px] md:h-[420px] object-cover object-bottom"
        />
      </section>

      <section className="text-[#8f6424] m-[15px] md:m-[30px] mt-0 md:mt-[-40px] mb-[50px]">
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[150px] items-center">
          <div>
            <img src={bg2} className="h-auto w-full max-w-[500px] md:h-[480px] md:w-[500px]" alt="" />
          </div>
          <div className="text-center mt-0 md:mt-[50px]">
            <p className="mb-[30px] md:mb-[50px] text-sm md:text-base">
              We start with safety before anything else. Every <br className="hidden md:block" /> decision
              from formulation to testing is made to support <br className="hidden md:block" /> skin that is
              dry, sensitive, or easily overwhelmed.
            </p>
            <p className="text-sm md:text-base">
              Our goal isn't stimulation or dramatic change, <br className="hidden md:block" /> but a calm,
              steady, and healthy recovery.
            </p>
          </div>
        </div>
      </section>
      <br />

      <section
        style={{ backgroundImage: `url(${bg3})` }}
        className="text-[#8f6424] w-full h-auto md:h-[700px] bg-cover bg-center py-10 md:py-0"
      >
        <h5 className="underline text-center text-[12px] mb-[40px] md:mb-[60px]">
          CLINICAL TESTING 01
        </h5>
        <h2 className="text-[32px] md:text-[50px] text-center mb-[20px] px-4">
          24 HOUR HYDRATION TEST
        </h2>
        <p className="text-sm md:text-[20px] text-center px-4">
          Delivers up to 24 hours of lasting hydration to help keep skin
          comfortably <br className="hidden md:block" /> moisturized without dryness-induced tightness.
        </p>

        <div className="flex flex-col md:flex-row items-center m-[20px] md:m-[180px] gap-[20px] md:gap-[2px] mt-[40px] md:mt-[100px]">
          <div>
            <img src={bg4} alt="" className="w-full max-w-[390px] h-auto md:h-[320px]" />
            <p>/ BEFORE</p>
          </div>
          <div>
            <img src={bg5} className="w-full max-w-[390px] h-auto md:h-[320px] md:mt-[-156px]" alt="" />
            <p>/ AFTER</p>
            <div className="mt-[-200px] md:mt-[-300px] ml-[30px] md:ml-[70px] border-white">
              <h2 className="text-[#fff] text-transparent text-3xl md:text-5xl font-bold [-webkit-text-stroke:2px_white]">
                97% <br />{" "}
                <span>
                  HYDRATION <br /> LOCK
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="text-[#8F6424] m-[15px] md:m-[30px]">
        <br />
        <br />
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[150px] items-center">
          <div>
            <h6 className="mb-[30px] tracking-wide uppercase underline text-[12px] text-center md:text-left">
              CLINICAL TESTING 02{" "}
            </h6>
            <h3 className="mb-[30px] tracking-wide uppercase text-[36px] md:text-[60px] font-normal text-center md:text-left">
              HRIPT TEST
            </h3>
            <h4 className="tracking-wide uppercase text-[20px] md:text-[30px] font-semibold mb-[20px] text-center md:text-left">
              DERMATOLOGICALLY TESTED{" "}
            </h4>
            <div>
              <p className="text-base md:text-[20px] mb-[20px]">
                <span>+</span> A formula gentle enough <br />
                for daily use
              </p>
              <p className="text-base md:text-[20px] mb-[20px]">
                <span>+</span> Stability-focused formula designed <br /> with
                sensitive skin in mind
              </p>
              <p className="text-base md:text-[20px] mb-[20px]">
                <span>+</span> Low-irritation formula developed <br /> for
                long-term use
              </p>
            </div>
          </div>
          <div>
            <img src={bg6} className="w-full max-w-[600px] h-auto md:h-[500px]" alt="" />
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-center text-[#8f6424] text-[32px] md:text-[50px] mb-[30px] mt-[80px] md:mt-[140px] px-4">
          PATENTED TECHNOLOGY
        </h1>

        <section className="text-[#fff]">
          <div
            style={{ backgroundImage: `url(${bg7})` }}
            className="w-full h-auto md:h-[300px] bg-cover bg-[center_21%] py-10 md:py-0"
          >
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[180px] m-[20px] md:m-[50px]">
              <div className="mt-0 md:mt-[110px] text-center md:text-left">
                <p className="text-[16px] md:text-[20px]">
                  <i>(1)</i>
                </p>
                <h3 className="text-[36px] md:text-[60px]">BIO MARINE SUMMER</h3>
              </div>
              <div className="mt-0 md:mt-[120px] text-[16px] md:text-[25px] text-center md:text-left">
                <p>
                  BIO-CONVERSION FERMENTATION <br className="hidden md:block" /> TECHNOLOGY OF ROSE RUGOSA{" "}
                  <br className="hidden md:block" /> AND ARTEMISIA
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-[#fff]">
          <div
            style={{ backgroundImage: `url(${bg8})` }}
            className="w-full bg-cover h-auto md:h-[300px] bg-[center_40%] py-10 md:py-0"
          >
            <div className="flex flex-col md:flex-row gap-[20px] md:gap-[420px]">
              <div className="mt-0 md:mt-[120px] ml-[20px] md:ml-[50px] text-center md:text-left">
                <p className="text-[16px] md:text-[25px]">
                  MAGNOLIA EXTRACT HELPS <br className="hidden md:block" /> SOOTHE THE SKIN AND PROTECT IT{" "}
                  <br className="hidden md:block" /> FROM EXTERNAL STRESSORS.
                </p>
              </div>
              <div className="mt-0 md:mt-[100px] text-center md:text-left">
                <p className="text-[20px] md:text-[30px] md:ml-[300px]">
                  <i>(2)</i>
                </p>
                <h2 className="text-[40px] md:text-[70px]">MAGNOLIA </h2>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="text-[#8f6424]">
        <div
          style={{ backgroundImage: `url(${bg9})` }}
          className="w-full bg-center bg-cover h-auto md:h-[800px] mt-[2px] py-16 md:py-0"
        >
          <div className="text-center pt-10 md:pt-30 md:mt-0 mt-[-100px]">
            <h3 className="text-[28px] md:text-[50px] font-bold mt-0 md:mt-[-60px]">ONE CREAM. BUILT FOR SAFETY.</h3>
            <p className="text-sm md:text-[20px] mt-[20px] font-medium">
              Fewer surprises, less irritation <br className="hidden md:block" /> Hydration that lasts throughout
              the day <br className="hidden md:block" /> A formula designed to support skin barrier recovery
            </p>
          </div>
          <div className="font-light text-sm md:text-[20px] mb-10 ml-4 md:ml-10 mt-[80px] md:mt-[450px]">
            <p>@ Results may vary by individual.</p>
            <p>@ Clinical testing was conduted under controlled conditions.</p>
          </div>
        </div>
      </section>

      <section className="mt-[60px] md:mt-[120px] mb-[100px]">
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[200px] m-[20px] items-center">
          <div>
            <img className="w-full max-w-[480px] h-auto md:h-[530px]" src={bg10} alt="" />
          </div>
          <div className="mt-0 md:mt-[-30px] text-center md:text-left">
            <h3 className="text-[40px] md:text-[60px] md:ml-[50px] text-[#8f642467]">OUR PRODUCT</h3>
            <img className="w-full max-w-[500px] h-auto md:h-[450px] mt-[-20px] md:mt-[-40px] mb-[-10px] md:mb-[-30px]" src={bg11} alt="" />
            <h4 className="text-[18px] md:text-[20px] font-semibold md:ml-[110px]">INTENSIVE MOISTURE CREAM</h4>
            <p className="text-[16px] md:text-[18px] md:ml-[170px] text-[#00000065]">80ML / 2.02FL. OZ.</p>
            <p className="text-[18px] md:text-[20px] mt-[10px] md:ml-[220px]">$30</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sclence;