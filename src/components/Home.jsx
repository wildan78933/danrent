import React from "react";
import Hero from "../assets/hero2.svg";
import Icon1 from "../assets/speedometer.svg";
import Icon2 from "../assets/speedo.svg";
import Icon3 from "../assets/car.svg";
import Icon4 from "../assets/ai.svg";
import Icon5 from "../assets/turbo.svg";

const Home = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1440px] m-auto ">
        <div className="flex flex-col  md:p-4 lg:p-4 sm:p-5">
          <img className="p-5" src={Hero} />
        </div>

        <div className=" flex lg:flex-row flex-col items-center justify-center gap-20 sm:p-5 sm:text-center">
          <div className="grid lg:grid-cols-4 grid-cols-4 ">
            <div className="grid  justify-items-center ">
              <img className="w-[54px]" src={Icon1} />
              <h1 className="lg:text-4xl text-2xl font-bold">500</h1>
              <p className="lg:text-2xl text-[16px] text-[#A9A9BE]">
                Horse Power
              </p>
            </div>
            <div className="grid justify-items-center ">
              <img className="w-[54px]" src={Icon2} />
              <h1 className="text-2xl lg:text-4xl font-bold">10S</h1>
              <p className="lg:text-2xl text-[16px] text-[#A9A9BE]">Speed AT</p>
            </div>

            {/*
          <div className="grid justify-items-center border ">
            <img className="w-[54px]" src={Icon3} />
            <h1 className="text-4xl font-bold ">AWD</h1>
            <p className="text-2xl text-[#A9A9BE]">Drive</p>
          </div>
  */}
            <div className="grid justify-items-center ">
              <img className="w-[54px]" src={Icon4} />
              <h1 className="lg:text-4xl text-2xl font-bold">A.I</h1>
              <p className="lg:text-2xl text-[16px] text-[#A9A9BE]">Tracking</p>
            </div>
            <div className="grid justify-items-center ">
              <img className="w-[54px]" src={Icon5} />
              <h1 className="lg:text-4xl text-2xl font-bold">Turbo</h1>
              <p className="lg:text-2xl text-[16px] text-[#A9A9BE]">Feature</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <button className="text-lg w-[273px] h-[63px] text-white font-bold bg-[#E76A3B] shadow-lg shadow-[#e7693b81] px-8 py-5 rounded-[40px]">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
