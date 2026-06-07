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
        className="w-full h-[500px] bg-cover bg-center flex items-end"
      >
        <h1 className="text-white text-[70px] font-light mb-10 ml-10">
          THE SCIENCE
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 text-[#8f6424]">
        <h5 className="text-sm tracking-[3px] mb-4 underline text-center mb-[60px]">
          OUR TECHNOLOGY
        </h5>

        <h3 className="text-5xl mb-6 text-center">THE SCIENCE BEHIND ELIOR</h3>

        <p className="text-lg mb-10 text-center mb-[60px]">
          Clinical testing and patented technology designed with safety as the
          first priority.
        </p>

        <img
          src={bg1}
          alt="Science"
          className="w-full h-[450px] object-cover object-bottom "
        />
      </section>

      <section className="text-[#8f6424] m-[30px] mt-[-40px] mb-[50px]">
        <div className="flex gap-[150px]">
          <div>
            <img src={bg2} className="h-[480px] w-[500px]" alt="" />
          </div>
          <div className="text-center mt-[150px]">
            <p className="mb-[50px]">
              We start with safety before anything else. Every <br /> decision
              from formulation to testing is made to support <br /> skin that is
              dry, sensitive, or easily overwhelmed.
            </p>
            <p>
              Our goal isn’t stimulation or dramatic change, <br /> but a calm,
              steady, and healthy recovery.
            </p>
          </div>
        </div>
      </section>
      <br />

      <section
        style={{ backgroundImage: `url(${bg3})` }}
        className="text-[#8f6424] w-[full] h-[700px] bg-cover bg-center  "
      >
        <h5 className="underline text-center text-[12px] mb-[60px] ">
          CLINICAL TESTING 01
        </h5>
        <h2 className="text-[50px] text-center mb-[20px]">
          24 HOUR HYDRATION TEST
        </h2>
        <p className="text-[20px] text-center ">
          Delivers up to 24 hours of lasting hydration to help keep skin
          comfortably <br /> moisturized without dryness-induced tightness.
        </p>

        <div className="flex m-[180px] gap-[1px] mt-[100px] ">
          <div>
            <img src={bg4} alt="" className="w-[380px] h-[320px]" />
            <p>/ BEFORE</p>
          </div>
          <div>
            <img src={bg5} className="w-[380px] h-[320px]" alt="" />
            <p>/ AFTER</p>
            <div className="mt-[-300px] ml-[70px] border-white">
              <h2 className="text-[#fff] text-transparent text-5xl font-bold [-webkit-text-stroke:2px_white]   ">
                97% <br />{" "}
                <p>
                  HYDRATION <br /> LOCK
                </p>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="text-[#8F6424] m-[30px]">
        <br />
        <br />
        <div className="flex gap-[150px]">
          <div>
            <h6 className="mb-[30px] tracking-wide uppercase underline text-[12px]">
              CLINICAL TESTING 02{" "}
            </h6>
            <h3 className="mb-[30px] tracking-wide uppercase text-[60px] font-normal">
              HRIPT TEST
            </h3>
            <h4 className="tracking-wide uppercase text-[30px] font-semibold mb-[20px]">
              DERMATOLOGICALLY TESTED{" "}
            </h4>
            <div>
              <p className="text-[20px] mb-[20px]">
                <span>+</span> A formula gentle enough <br />
                for daily use
              </p>
              <p className="text-[20px] mb-[20px]">
                <span>+</span> Stability-focused formula designed <br /> with
                sensitive skin in mind
              </p>
              <p className="text-[20px] mb-[20px]">
                <span>+</span> Low-irritation formula developed <br /> for
                long-term use
              </p>
            </div>
          </div>
          <div>
            <img src={bg6} className="w-[600px] h-[500px]" alt="" />
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-center text-[#8f6424] text-[50px] mb-[30px] mt-[140px]">
          PATENTED TECHNOLOGY
        </h1>

        <section className="text-[#fff]">
          <div
            style={{ backgroundImage: `url(${bg7})` }}
            className="w-full h-[300px]  bg-cover  bg-[center_21%] "
          >
            <div className="flex gap-[180px] m-[50px]">
              <div className="mt-[110px]">
                <p className="text-[20px]">
                  <i>(1)</i>
                </p>
                <h3 className="text-[60px]">BIO MARINE SUMMER</h3>
              </div>
              <div className="mt-[120px] text-[25px]">
                <p>
                  BIO-CONVERSION FERMENTATION <br /> TECHNOLOGY OF ROSE RUGOSA{" "}
                  <br /> AND ARTEMISIA
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-[#fff]">
          <div
            style={{ backgroundImage: `url(${bg8})` }}
            className=" w-full bg-cover h-[300px] bg-[center_40%] "
          >
            <div className="flex  gap-[420px] ">
              <div className="mt-[120px] ml-[50px]">
                <p className="text-[25px]">
                  MAGNOLIA EXTRACT HELPS <br /> SOOTHE THE SKIN AND PROTECT IT{" "}
                  <br /> FROM EXTERNAL STRESSORS.
                </p>
              </div>
              <div className="mt-[100px]">
                <p className="text-[30px] ml-[300px]">
                  <i>(2)</i>
                </p>
                <h2 className="text-[70px]">MAGNOLIA </h2>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="text-[#8f6424]">
        <div
          style={{ backgroundImage: `url(${bg9})` }}
          className="w-full bg-center bg-cover h-[900px]  mt-[2px]"
        >
          <div className="text-center pt-30">
            <h3 className="text-[50px] font-bold ">ONE CREAM. BUILT FOR SAFETY.</h3>
            <p className="text-[20px] mt-[20px] font-medium">
              Fewer surprises, less irritation <br /> Hydration that lasts throughout
              the day <br /> A formula designed to support skin barrier recovery
            </p>
          </div>
          <div className="font-light text-[20px] mb-10 ml-10 mt-[500px]">
            <p>@  Results may vary by individual.</p>
            <p>@  Clinical testing was conduted under controlled conditions.</p>
          </div>
        </div>
      </section>

      <section className="mt-[120px] mb-[100px]">
        <div className="flex gap-[200px] m-[20px]">
          <div>
            <img className="w-[480px] h-[530px]" src={bg10} alt="" />
          </div>
          <div className="mt-[-30px]">
            <h3 className="text-[60px] ml-[50px] text-[#8f642467]">OUR PRODUCT</h3>
            <img className="w-[500px] h-[450px] mt-[-40px] mb-[-30px] " src={bg11} alt="" />
            <h4 className="text-[20px] font-semibold ml-[110px]">INTENSIVE MOISTURE CREAM</h4>
            <p className="text-[18px] ml-[170px] text-[#00000065]">80ML / 2.02FL. OZ.</p>
            <p className="text-[20px] mt-[10px] ml-[240px]">$30</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sclence;
