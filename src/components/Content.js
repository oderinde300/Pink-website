import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Content = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "/images/content-bg-2.png"
  );

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage("/images/content-m-bg.png");
      } else {
        setBackgroundImage("/images/content-bg-2.png");
      }
    };

    // Set the initial background image
    updateBackgroundImage();

    // Add event listener to update background image on resize
    window.addEventListener("resize", updateBackgroundImage);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, []);

  return (
    <motion.div
      className="h-screen md:h-[964px] bg-content-m-pattern md:bg-content-pattern bg-contain bg-no-repeat flex justify-center my-background"
      initial={{ backgroundImage: "url(/images/content-bg.png)" }}
      whileInView={{ backgroundImage: `url(${backgroundImage})` }}
      transition={{ ease: "easeInOut", duration: 5 }}
    >
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
          <div className="w-full md:w-3/4 p-4 md:p-0 flex flex-wrap flex-col md:flex-row justify-center items-start md:items-center md:justify-start gap-9 md:gap-[75px]">
            <motion.div
              className="w-[150px] h-[150px] border border-white rounded-full hover:bg-red-500 ease-in-out hidden md:flex justify-center items-center"
              initial={{ background: "#000000" }}
              whileHover={{ background: "#EF1A98" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              <div className="flex justify-between gap-[43px]">
                <img
                  src="/images/arrow-left.png"
                  className="w-[50px] h-[50px]"
                />
                <img
                  src="/images/arrow-left.png"
                  className="w-[50px] h-[50px] rotate-180"
                />
              </div>
            </motion.div>

            <div className="flex flex-col items-start gap-[22px] text-white lg:max-w-[700px]">
              <p className="text-2xl">Our Mission</p>
              <p className="text-xl leading-[30px] md:text-[32px] md:leading-[38px] capitalize">
                To equip digital creators with cutting-edge tools and
                strategies, fostering a community where innovation and
                empowerment lead to success.
              </p>
              <div className="border-b border-w w-3/4 mt-6"></div>
            </div>
            <motion.div
              className="md:hidden w-[106px] h-[106px] border border-white rounded-full hover:bg-red-500 ease-in-out flex justify-center items-center"
              initial={{ background: "#000000" }}
              whileHover={{ background: "#EF1A98" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              <div className="flex justify-between">
                <img
                  src="/images/arrow-left.png"
                  className="w-[50px] h-[50px]"
                />
                <img
                  src="/images/arrow-left.png"
                  className="w-[50px] h-[50px] rotate-180"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Content;
