import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

const Hero = () => {
  const naviagate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(
    "/images/home-bg-2.png"
  );

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage("/images/con-bg.svg");
      } else {
        setBackgroundImage("/images/home-bg-2.png");
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
      className="relative h-[500px] md:h-[900px] bg-black md:bg-hero-pattern bg-cover bg-no-repeat "
      // initial={{ backgroundImage: "url(/images/home-bg.png)" }}
      initial={{ background: "#000000" }}
      animate={{ backgroundImage: `url(${backgroundImage})` }}
      transition={{ delay: 5, ease: "easeInOut", duration: 2 }}
    >
      <NavBar />
      <div className="relative flex justify-center">
        <div className="relative">
          <div className="relative w-full p-6 md:p-0 md:w-3/4">
            <p className=" text-white text-[40px] leading-[45px] md:leading-[100px] md:text-8xl font-normal pt-[95px] md:pt-[120px] md:max-w-[799px] mb-4">
              Digitize Your Business Without the Financial Burden.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, ease: "easeInOut", duration: 5 }}
            >
              <p className="md:max-w-[799px] text-2xl md:text-[32px] md:leading-[41px] mb-4">
                Affordable, Custom Digital Solutions Tailored to Your Budget.
              </p>
              <button
                className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs gradient-button transition-all ease-in-out"
                onClick={() => naviagate("/services")}
              >
                Discover Our Service
              </button>
            </motion.div>
          </div>
          <motion.img
            src="/images/home-ani-1.png"
            initial={{ y: "100vh" }}
            animate={{ rotate: 360, y: "-200vh" }}
            transition={{ type: "tween", duration: 5 }}
            className="w-[400px] h-[400px] absolute bottom-[-10rem] right-[-15rem]"
          ></motion.img>

          <motion.img
            src="/images/home-ani-2.png"
            initial={{ y: "100vh" }}
            animate={{ rotate: 360, y: "-200vh" }}
            transition={{ type: "tween", duration: 5 }}
            className="w-[400px] h-[400px] absolute bottom-[-10rem] right-[15rem]"
          ></motion.img>

          <motion.img
            src="/images/home-phone.png"
            initial={{ y: "100vh" }}
            animate={{ rotate: 360, y: "-320%", x: "280%" }}
            transition={{ type: "tween", duration: 5, delay: 2 }}
            className=""
          ></motion.img>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
