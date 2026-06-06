import React from "react";
import Footer from "../components/Footer";
import bg from "/image2/bg.png";
import bg1 from "/image2/bg4.png";
import bg2 from "/image2/bg1.jpg"
import bg3 from "/image2/bg8.png"
import bg4 from "/image2/bg9.png"
import bg5 from "/image2/bg10.png"

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
              We start with safety before anything else. Every <br /> decision from
              formulation to testing is made to support <br /> skin that is dry,
              sensitive, or easily overwhelmed.
            </p>
            <p>
              Our goal isn’t stimulation or dramatic change, <br /> but a calm, steady,
              and healthy recovery.
            </p>
          </div>
        </div>
      </section>
     <br />

      <section
      style={{ backgroundImage: `url(${bg3})` }}
      className="text-[#8f6424] w-[full] h-[700px] bg-cover bg-center  ">

        <h5 className="underline text-center text-[12px] mb-[60px] ">CLINICAL TESTING 01</h5>
        <h2 className="text-[50px] text-center mb-[20px]">24 HOUR HYDRATION TEST</h2>
        <p className="text-[20px] text-center ">Delivers up to 24 hours of lasting hydration to help keep skin comfortably <br /> moisturized without dryness-induced tightness.</p>

        <div className="flex m-[180px] gap-[1px] mt-[67px] ">
          <div>
            <img src={bg4} alt="" className="w-[450px] h-[400px]" />   
            <p>/ BEFORE</p>    
            </div>
            <div>
              <img src={bg5} className="w-[450px] h-[400px]" alt="" />
              <p>/ AFTER</p>
              <div className="mt-[-330px] ml-[60px] border-white">
                <h2 className="text-[#fff] text-transparent text-6xl font-bold [-webkit-text-stroke:2px_white]   ">97% <br /> <p>HYDRATION <br /> LOCK</p></h2>
              </div>
              
            </div>
        </div>
      </section>

      <section className="text-[#8F6424]">
        <br />
        <br />
        <div className="flex">
          <div>
            <h6 className="mb-[30px]">CLINICAL TESTING 02 </h6>
            <h3 className="mb-[30px]">HRIPT TEST</h3>
               <h4>DERMATOLOGICALLY TESTED </h4>

          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Sclence;
