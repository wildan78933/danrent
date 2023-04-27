import React from "react";
import image from "../assets/sven-d-a4S6KUuLeoM-unsplash.jpg";

const Join = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="flex flex-col md:max-w-[1440px] m-auto mt-[40px]">
        <div className=" relative w-full max-w-5xl ml-auto mr-auto mt-0 mb-3 xl:w-[95vw] rounded-lg">
          <div className="brightness-[30%] relative flex items-center">
            <img
              src={image}
              className="h-[381px] w-full rounded-lg object-cover"
            />
          </div>
          <div className=" absolute text-center top-[55px] p-7 gap-4 text-white w-full flex flex-col items-center md:items-center md:justify-center md:left-0 md:top-14">
            <h1 className="font-extrabold text-3xl">
              Let’s drive with Us today!
            </h1>
            <p className="">
              Our team of experts is committed to providing exceptional customer
              service and ensuring that your rental experience is smooth and
              hassle-free.
            </p>
            <button className="text-lg w-[273px] h-[63px] text-white font-bold italic bg-[#E76A3B] shadow-lg shadow-[#e7693b81] px-8 py-5 rounded-[40px] mt-5">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
