import React from "react";
import Hero from "../assets/hero.svg";
import bmw from "../assets/bmw.svg";
import ferari from "../assets/ferrari.svg";
import ford from "../assets/ford.svg";
import honda from "../assets/honda.svg";
import lamborghini from "../assets/lamborghini.svg";
import mitsubish from "../assets/mitsubish.svg";
import tesla from "../assets/tesla.svg";
import toyota from "../assets/toyota.svg";

const About = () => {
  return (
    <div className="w-full bg-[#060523] py-24">
      <div className="flex flex-col md:max-w-[1440px] m-auto mt-[40px]">
        <div className="flex lg:flex-row flex-col items-center  ">
          <div className="">
            <img className="" src={Hero} />
          </div>
          <div className="lg:w-[40%]  text-white container mx-auto px-4  ">
            <h3 className="text-2xl py-1">About Us</h3>
            <h1 className="font-extrabold text-4xl py-4">
              More than 250+ special collection cars
            </h1>
            <p className="py-6">
              Acquire the automobile you desire with payment plans that suit
              you. We have a plethora of enticing deals available through our
              collaborations with trustworthy leasing partners.
            </p>

            <button className="text-lg w-[273px] h-[63px] text-white font-bold italic bg-[#E76A3B] shadow-lg shadow-[#e7693b81] px-8 py-5 rounded-[40px]">
              Booking Now
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-8 grid-cols-8 items-center  justify-between lg:mt-[120px] mt-10">
          <img src={bmw} />
          <img src={ferari} />
          <img src={ford} />
          <img src={honda} />
          <img src={lamborghini} />
          <img src={mitsubish} />
          <img src={tesla} />
          <img src={toyota} />
        </div>
      </div>
    </div>
  );
};

export default About;
