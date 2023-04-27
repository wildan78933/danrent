import React from "react";
import card1 from "../assets/card1.png";
import Star from "../assets/Star1.svg";

const Card = () => {
  return (
    <div className="w-full bg-[#F5F6F6] py-24">
      <div className="flex flex-col md:max-w-[1440px] m-auto  mt-[60px]">
        <div className="flex justify-between items-center leading-10 px-4 ">
          <div>
            <h1 className="font-extrabold text-4xl text-[#060523]">
              Popular Cars
            </h1>
            <p className="text-[#A9A9BE]">Start your big day</p>
          </div>

          <div className="">
            <button className="px-8 py-1 border border-[#060523] text-[#060523] font-semibold rounded-full hover:bg-white ">
              View All
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-8 gap-4 px-4">
          <div className="flex flex-row justify-center  py-7 px-7  m-5 rounded-[24px] bg-white ">
            <div className=" ">
              <img
                className=" h-44 w-full object-fill rounded-[12px]"
                src={card1}
                alt=""
              />
              <h3 className=" text-xl font-extrabold cursor-pointer pt-5">
                Nissan Sport Yellow
              </h3>
              <p className="text-[#A9A9BE] ">Sport Car</p>

              <div className=" flex pt-5 justify-between items-center">
                <div className="flex justify-items-center items-center flex-row">
                  <h1 className="text-[#E76A3B] font-extrabold text-xl">
                    $190
                  </h1>
                  <p>/day</p>
                </div>

                <div className="flex justify-items-center items-center">
                  <img src={Star} alt="" />
                  <p>(4.9)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center py-7 px-7 m-5 rounded-[24px] bg-white">
            <div className="">
              <img
                className=" h-44 w-full object-fill rounded-[12px]"
                src={card1}
                alt=""
              />
              <h3 className="text-xl font-extrabold cursor-pointer pt-5">
                Nissan Sport Yellow
              </h3>
              <p className="text-[#A9A9BE]">Sport Car</p>

              <div className="flex pt-5 justify-between items-center">
                <div className="flex justify-items-center items-center flex-row">
                  <h1 className="text-[#E76A3B] font-extrabold text-xl">
                    $190
                  </h1>
                  <p>/day</p>
                </div>

                <div className="flex justify-items-center items-center">
                  <img src={Star} alt="" />
                  <p>(4.9)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center py-7 px-7 m-5 rounded-[24px] bg-white">
            <div className="">
              <img
                className=" h-44 w-full object-fill rounded-[12px]"
                src={card1}
                alt=""
              />
              <h3 className="text-xl font-extrabold cursor-pointer pt-5">
                Nissan Sport Yellow
              </h3>
              <p className="text-[#A9A9BE]">Sport Car</p>

              <div className="flex pt-5 justify-between items-center">
                <div className="flex justify-items-center items-center flex-row">
                  <h1 className="text-[#E76A3B] font-extrabold text-xl">
                    $190
                  </h1>
                  <p>/day</p>
                </div>

                <div className="flex justify-items-center items-center">
                  <img src={Star} alt="" />
                  <p>(4.9)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center py-7 px-7 m-5 rounded-[24px] bg-white">
            <div className="">
              <img
                className=" h-44 w-full object-fill rounded-[12px]"
                src={card1}
                alt=""
              />
              <h3 className="text-xl font-extrabold cursor-pointer pt-5">
                Nissan Sport Yellow
              </h3>
              <p className="text-[#A9A9BE]">Sport Car</p>

              <div className="flex pt-5 justify-between items-center">
                <div className="flex justify-items-center items-center flex-row">
                  <h1 className="text-[#E76A3B] font-extrabold text-xl">
                    $190
                  </h1>
                  <p>/day</p>
                </div>

                <div className="flex justify-items-center items-center">
                  <img src={Star} alt="" />
                  <p>(4.9)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
