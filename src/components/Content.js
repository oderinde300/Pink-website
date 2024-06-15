import React from "react";

const Content = () => {
  return (
    <div className="h-screen md:h-[964px] bg-content-m-pattern md:bg-content-pattern bg-contain bg-no-repeat flex justify-center">
      <div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 p-4 md:p-0">
            <p className="w-full md:w-3/4 text-white capitalize text-[32px] leading-[40px] md:text-[54px] md:leading-[72px] mt-[120px] md:mt-[203px] mb-[44px] md:mb-[132px]">
              we harness the synergy of technology, creativity, and strategic
              insight.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full md:w-3/4 p-4 md:p-0 flex flex-col md:flex-row justify-center items-start md:items-center md:justify-start gap-9 md:gap-[75px]">
            <img
              src="/images/circled-arrow.svg"
              alt="icon"
              className="hidden md:block md:max-w-[150px] md:max-h-[150px]"
            />
            <div className="flex flex-col items-start gap-[22px] text-white max-w-[494px]">
              <p className="font-mont text-2xl">Our Mission</p>
              <p className="font-mont text-xl leading-[30px]">
                To equip digital creators with cutting-edge tools and
                strategies, fostering a community where innovation and
                empowerment lead to success.
              </p>
            </div>
            <img
              src="/images/circled-arrow.svg"
              alt="icon"
              className="block md:hidden w-[106px] h-[106px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
