import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const naviagate = useNavigate();
  return (
    <div className="md:h-[800px] bg-black md:bg-hero-pattern bg-cover bg-no-repeat flex justify-center">
      <div className="w-full p-6 md:p-0 md:w-3/4">
        <p className=" text-white text-[40px] leading-[45px] md:leading-[100px] md:text-8xl font-normal pt-[95px] md:pt-[120px] md:max-w-[799px] mb-4">
          Digitize Your Business Without the Financial Burden.
        </p>
        <p className="md:max-w-[799px] text-2xl md:text-[32px] md:leading-[41px] mb-4">
          Affordable, Custom Digital Solutions Tailored to Your Budget.
        </p>
        <button
          className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs"
          onClick={() => naviagate("/services")}
        >
          Discover Our Service
        </button>
      </div>
    </div>
  );
};

export default Hero;
