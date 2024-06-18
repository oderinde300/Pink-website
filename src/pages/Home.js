import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { easeIn } from "framer-motion/dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(
    "/images/home-sec-4-bg.png"
  );

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth <= 768) {
        setBackgroundImage("/images/com-m-bg.png");
      } else {
        setBackgroundImage("/images/home-sec-4-bg.png");
      }
    };

    // Set the initial background image
    updateBackgroundImage();

    // Add event listener to update background image on resize
    window.addEventListener("resize", updateBackgroundImage);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, []);

  const containerVariants = {
    hidden: {
      // opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      // x: "-100vh",
      // transition: { ease: "easeInOut" },
    },
  };

  const phrases = [
    "Marketing and Branding",
    "Software and Application Development",
    "Creative and Multimedia Solutions",
    "Financial and Fundraising strategy",
    "Digital Strategy and Innovation",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const [isImage1Visible, setIsImage1Visible] = useState(true);

  const handleHoverStart = () => {
    setIsImage1Visible(false);
  };

  const handleHoverEnd = () => {
    setIsImage1Visible(true);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className=""
    >
      <Hero />
      <Content />
      <div className="flex justify-center">
        <div className="w-full md:w-3/4 px-4 pb-4 md:p-0 mt-10 md:mt-[250px] lg:mt-10">
          <img
            src="/images/home-2.png"
            alt="science"
            className="w-full object-cover"
          />
        </div>
      </div>
      <section className="bg-black md:py-[147px] py-[51px] flex justify-center text-white">
        <div className="w-full md:w-3/4 p-4 md:p-0">
          <p className="text-[32px] leading-[35px] md:text-[4rem] md:leading-[4rem] max-w-[443px] pb-[35px] md:pb-14 text-[#FEFEFE]">
            Our Capabilities.
          </p>
          <div className="flex flex-col md:flex-row gap-9 items-center md:items-end">
            <div className="max-w-[536px]">
              <div className="bg-[#111111]">
                <p className="text-xl leading-[35px] pl-9 pt-4 pb-14">
                  Seamless integration with existing systems to enhance
                  functionality without heavy upfront investment
                </p>
              </div>
              <img src="/images/software-1.svg" alt="table images" />
            </div>
            <div className="max-w-[434px] bg-[#111111] pr-4">
              <div className="bg-[#111111]">
                <p className="text-xl leading-[35px] pl-9 pt-4 pb-6 max-w-[350px]">
                  Seamless integration with existing systems to enhance
                  functionality without heavy upfront investment
                </p>
              </div>
              <img src="/images/software-2.svg" alt="table images" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center md:mb-[147px] mb-[54px]">
        <div className="w-full md:w-3/4 p-4 md:p-0 bg-black bg-features-m-pattern md:bg-features-pattern bg-cover bg-no-repeat flex justify-center">
          <div className="flex flex-col md:flex-row items-end gap-4 py-[70px] px-0 md:px-20">
            <div className="flex flex-col gap-8">
              <p className="text-white md:text-black  text-[32px] leading-[35px] md:text-[64px] md:leading-[54px] max-w-[359px]">
                Unique Features.
              </p>
              <div
                style={{
                  boxShadow: "0px 3.57px 26.76px 3.57px #00000080",
                  boxShadow: "0px 0px 0px 3.57px #FFFFFF1A",
                }}
                className="bg-black rounded-md px-[53px] py-5 flex flex-col items-center gap-[29px] max-w-[388px]"
              >
                <img src="/images/star.svg" alt="star icon" />
                <p className=" text-white text-2xl">
                  Cost-effective modular upgrades and scalability
                </p>
              </div>
            </div>
            <div
              style={{
                boxShadow: "0px 3.57px 26.76px 3.57px #00000080",
                boxShadow: "0px 0px 0px 3.57px #FFFFFF1A",
              }}
              className="bg-black rounded-md px-[31px] py-5 flex flex-col items-center gap-[29px] max-w-[388px] md:max-w-[410px] h-full lg:max-h-[300px]"
            >
              <img src="/images/arrow.svg" alt="arrow icon" />
              <p className=" text-white text-2xl">
                Pay-for-what-you-use features, ensuring you don’t overspend on
                unnecessary functionalities{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center mb-[58px] text-white">
        <div className="w-full md:w-3/4 p-4 md:p-0 ">
          <p className="flex justify-center items-center text-[32px] leading-[35px] md:text-[64px] md:leading-[54px] mb-10">
            Awesome Benefits.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-[60px]">
            <div className="w-full md:w-1/2 bg-[#474545] rounded-[10px] pl-7 pr-4 pt-[70px] flex flex-col gap-4 pb-10">
              <img
                src="/images/boxed-star.svg"
                alt="icon"
                className="w-16 h-16 mb-6"
              />

              <p className="font-normal md:font-bold text-2xl md:text-[32px] md:leading-[27px]">
                Cost Management
              </p>
              <p className="text-xl">
                Manage your finances better with our flexible payment terms,
                allowing up to 60 months of interest-free repayments
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-[#474545] rounded-[10px] pl-7 pr-4 pt-[70px] flex flex-col gap-4 pb-10">
              <img
                src="/images/chip.svg"
                alt="icon"
                className="w-16 h-16 mb-6"
              />
              <p className="font-normal md:font-bold text-2xl md:text-[32px] md:leading-[27px]">
                Investment in Growth
              </p>
              <p className="text-xl">
                Invest in your business's future without the stress of large
                initial expenses. Our tailored solutions are designed to
                maximize your return on investment by enhancing efficiencies and
                expanding capabilities at a pace that suits your financial
                situation
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-3/4 md:w-full flex flex-col md:flex-row justify-center items-center gap-6">
              <button
                className="font-mont border border-white rounded-[40px] py-[13px] px-[30px] text-xs hover:border-white gradient-button2 transition-all ease-in-out"
                onClick={() => navigate("/financial-solutions")}
              >
                Start Your transformation journey
              </button>
              <motion.button
                className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs gradient-button transition-all ease-in-out"
                onClick={() => navigate("repayment-calculator")}
              >
                Explore Payment Options
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden md:flex justify-center text-white">
        <div className="w-3/4">
          <p className="text-base mb-[56px]">Our Services</p>
          <div className="flex gap-[22px] items-center mb-[38px]">
            <img src="/images/filled-star.svg" className="" alt="icon" />
            <div className="w-full relative">
              <AnimatePresence wait>
                <motion.div
                  key={currentPhraseIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute top-[-2rem] text-[54px] leading-[72px] text-white"
                >
                  {phrases[currentPhraseIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* <img src="/images/long-arrow.svg" className="" alt="arrow image" /> */}
          {/* <div className="flex justify-center items-center relative">
            <div
              className="image-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={
                  isImage1Visible
                    ? "/images/long-arrow.svg"
                    : "/images/long-arrow-2.png"
                }
                alt={isImage1Visible ? "Image 1" : "Image 2"}
                className="image w-full h-full transition-opacity duration-300 ease-in-out"
              />
            </div>
          </div> */}

          <div className="flex mt-[100px] mb-4">
            <motion.div
              className=" relative"
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 2 }}
            >
              <motion.img
                src={
                  isImage1Visible
                    ? "/images/long-arrow.svg"
                    : "/images/long-arrow-2.png"
                }
                alt={isImage1Visible ? "Image 1" : "Image 2"}
                className=""
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        className="relative flex justify-center text-white bg-no-repeat max-h-[600px]"
        initial={{ backgroundImage: "url(/images/con-bg.svg)" }}
        whileHover={{
          backgroundImage: `url(${backgroundImage})`,
          transition: { ease: "easeInOut", duration: 3 },
          scale: 1.01,
        }}
        transition={{ type: "tween", duration: 3, ease: "easeInOut" }}
      >
        <div className="relative w-full md:w-3/4 p-4 md:p-0 py-[54px] md:py-[122px] ">
          <div className="relative z-10 ">
            <div className="flex flex-col gap-4 mb-6">
              <p className="text-[32px] leading-[35px] md:text-[64px] md:leading-[66px] w-full md:w-4/5">
                Concerned About High Costs of Digital Transformation?
              </p>
              <p className="text-xl w-full md:w-3/5">
                We understand that the upfront cost of digital innovation can
                bedaunting. Pink Power Ventures offers tailored software
                solutions with flexible payment plans to make digital
                transformation accessible for all businesses.
              </p>
            </div>
            <motion.button
              className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs gradient-button transition-all ease-in-out"
              onClick={() => navigate("/contact")}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </div>
      </motion.section>
      <section className="flex justify-center text-white md:pb-[95px]">
        <div className="w-full md:w-3/4 p-4 md:p-0">
          <div className="flex flex-col md:flex-row gap-3 mb-[108px] items-end">
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div className="flex flex-col gap-9 w-full md:w-4/5 my-12 md:my-[107px]">
                <p className="text-[32px] leading-[35px] md:text-[64px] md:leading-[54px]">
                  Our Portfolio
                </p>
                <p className="text-xl">
                  From strategic planning to flawless execution, our
                  comprehensive services ensure your digital presence is not
                  just seen but felt and valued
                </p>
              </div>
              <img
                src="/images/fire-carton.png"
                alt="carton image"
                className=""
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <img
                src="/images/dinosaur.png"
                alt="dinosaur image"
                className=""
              />
              <img src="/images/carton.png" alt="carton image" className="" />
            </div>
          </div>
          <div className="w-full mx-auto flex justify-center items-center">
            <button
              className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs gradient-button transition-all ease-in-out"
              onClick={() => {
                navigate("/portfolio");
              }}
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Home;
