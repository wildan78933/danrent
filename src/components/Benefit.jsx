import React from "react";
import testimoni1 from "../assets/testimoni1.svg";
import Payment from "../assets/payment.svg";
import booking from "../assets/booking.svg";
import calender from "../assets/calendar.svg";
import flexib from "../assets/flexib.svg";
import cs from "../assets/cs.svg";
import option from "../assets/option.svg";

const Benefit = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="flex flex-col md:max-w-[1440px] m-auto p-4 mt-[80px]">
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="sm:max-w-md">
            <img src={testimoni1} alt="" />
          </div>

          <div className="flex flex-col text-[#060523]">
            <h1 className="font-extrabold text-4xl">Benefits for you</h1>
            <p className="text-[#A9A9BE] pb-5">
              Driving safely and easily is only with us
            </p>

            <div className="flex flex-row pb-5 items-center gap-4">
              <img src={Payment} />
              <div>
                <h3 className="text-2xl font-extrabold">Best Price</h3>
                <p className="text-[#A9A9BE]">
                  The best prices and special offers.
                </p>
              </div>
            </div>

            <div className="flex flex-row pb-5  items-center gap-4">
              <img src={booking} />
              <div>
                <h3 className="text-2xl font-extrabold">Easy Booking</h3>
                <p className="text-[#A9A9BE]">
                  intuitive and easy-to-use system
                </p>
              </div>
            </div>

            <div className="flex flex-row pb-5 items-center gap-4">
              <img src={flexib} />
              <div>
                <h3 className="text-2xl font-extrabold">Payment Flexibility</h3>
                <p className="text-[#A9A9BE]">secure and convenient payment</p>
              </div>
            </div>

            <div className="flex flex-row pb-5 items-center gap-4">
              <img src={cs} />
              <div>
                <h3 className="text-2xl font-extrabold">
                  24/7 Customer Service
                </h3>
                <p className="text-[#A9A9BE]">
                  Customer service ready to help you at any time
                </p>
              </div>
            </div>

            <div className="flex flex-row pb-5 items-center gap-4">
              <img src={option} />
              <div>
                <h3 className="text-2xl font-extrabold">
                  Varied Vehicle Option
                </h3>
                <p className="text-[#A9A9BE]">
                  You can choose the vehicle that fits your needs.
                </p>
              </div>
            </div>

            <button className="text-lg w-[273px] h-[63px] text-white font-bold italic bg-[#E76A3B] shadow-lg shadow-[#e7693b81] px-8 py-5 rounded-[40px]">
              See All Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
