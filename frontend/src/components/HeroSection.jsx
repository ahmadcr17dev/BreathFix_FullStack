import React from "react";
import heroimage from "../images/heroimage.png";
import heart from "../images/heart.png";
import eyes from "../images/eyes.png";
import lungs from "../images/lungs.png";
import ovaries from "../images/ovaries.png";
import stomach from "../images/stomach.png";

const HeroSection = () => {
  return (
    <>
      <div className="bg-white font-poppins mt-16 px-4 py-10 md:py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left Column */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Understanding COPD: Causes, Symptoms, and Effective Management
            </h1>
            <p
              className="text-gray-600 mb-6 font-poppins"
              style={{ width: "85%" }}
            >
              <span className="font-semibold">
                {" "}
                Chronic Obstructive Pulmonary Disease (COPD){" "}
              </span>{" "}
              is a progressive lung condition that obstructs airflow, making it
              difficult to breathe. It commonly results from long-term exposure
              to irritants like cigarette smoke, air pollution, or workplace
              dust and chemicals. COPD encompasses conditions such as emphysema
              and chronic bronchitis.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-16 rounded shadow-md">
              Learn More
            </button>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <img
              src={heroimage}
              alt="COPD Illustration"
              className="w-full h-auto border rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <section className="mt-16 text-center font-poppins">
        <div>
          <h1 className="text-5xl font-semibold">Centers of Excellence</h1>
          <p className="mt-1">The best clinical talent and skills</p>
        </div>
        <div className="flex flex-row justify-evenly mt-16">
          <div className="flex flex-col justify-center">
            <img
              src={eyes}
              title="Opthamology"
              alt="eye pic"
              className="w-18 h-24 mx-auto"
            />
            <caption className="font-semibold mt-6 text-xl">
              Opthamology
            </caption>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={heart}
              title="Cardiology"
              alt="heart pic"
              className="w-16 h-24 mx-auto"
            />
            <caption className="font-semibold mt-6 text-xl">Cardiology</caption>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={lungs}
              title="Pulmonology"
              alt="lungs pic"
              className="w-18 h-24 mx-auto"
            />
            <caption className="font-semibold mt-6 text-xl">
              Pulmonology
            </caption>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={ovaries}
              title="Gynaecology"
              alt="ovi pic"
              className="w-18 h-24 mx-auto"
            />
            <caption className="font-semibold mt-6 text-xl">
              Gynaecology
            </caption>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={stomach}
              title="Gastroentology"
              alt="stomach pic"
              className="w-18 h-24 mx-auto"
            />
            <caption className="font-semibold mt-6 text-xl">
              Gastroentology
            </caption>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
