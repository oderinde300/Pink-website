import React from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const containerVariants = {
  hidden: {
    x: "100vh",
  },
  visible: {
    x: "0vh",
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const About = () => {
  const naviagate = useNavigate();
  return (
    <motion.section
      className="text-white "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <NavBar />
      <div className="pt-[160px] md:pt-[120px]">
        <div className="flex justify-center mb-[58px] md:mb-[121px]">
          <div className="w-full px-6 md:px-0 md:w-3/4">
            <p className="text-center mb-8 text-[32px] leading-[54px] md:text-8xl md:leading-[100px]">
              About Us
            </p>
            <p className="text-xl leading-[30px] md:text-[32px] md:leading-[46px]">
              At Pink Power Ventures, we harness the synergy of technology,
              creativity, and strategic insight to elevate digital influencers
              and content creators, enabling them to achieve unprecedented
              success.
            </p>
          </div>
        </div>
        <div className="flex justify-center md:pb-[100px]">
          <div className="w-full p-6 md:p-0 md:w-3/4 flex flex-col gap-[100px]">
            <div className="flex flex-col md:flex-row gap-9 items-center justify-center">
              <div className="w-full md:w-1/2 flex flex-col justify-start gap-6 order-2 md:order-1">
                <p className="text-[32px] leading-[54px] md:text-5xl">
                  Our Mission
                </p>
                <p className="text-xl md:leading-[32px] md:text-2xl">
                  To equip digital creators with cutting-edge tools and
                  strategies, fostering a community where innovation and
                  empowerment lead to success.
                </p>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <img src="/images/about-1.png" alt="Logo" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-9 items-center justify-center">
              <div className="w-full md:w-1/2">
                <img src="/images/about-2.png" alt="Logo" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-start gap-6">
                <p className="text-[32px] leading-[54px] md:text-5xl">
                  Our Vision
                </p>
                <p className="text-xl md:leading-[32px] md:text-2xl">
                  To be the premier global platform for digital influencers,
                  setting new benchmarks in creativity, effectiveness, and
                  empowerment.
                </p>
                <button className="w-3/4 md:w-1/2 font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs gradient-button transition-all ease-in-out">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 p-4 md:p-0">
            <p className=" mb-8 md:mb-[133px] text-[32px] leading-[54px] md:text-8xl md:leading-[100px]">
              Core Values of Our Services
            </p>
            <div className="mb-[51px] md:mb-16">
              <div className="w-full md:w-3/4">
                <p className="mb-2.5 md:mb-6 text-2xl md:text-[40px] leading-[40px] font-bold">
                  Agile{" "}
                </p>
                <p className="mb-3 text-xl md:text-[32px] leading-[30px] md:leading-[45px]">
                  We adapt quickly to changes and continuously evolve our
                  strategies to meet your needs efficiently.
                </p>
              </div>
              <img
                src="/images/about-3.png"
                alt="people"
                className="hidden md:block"
              />
              <img
                src="/images/about-3-m.png"
                alt="people"
                className="block md:hidden"
              />
            </div>
            <div className="mb-[51px] md:mb-16">
              <div className="w-full md:w-3/4">
                <p className="mb-2.5 md:mb-6 text-2xl md:text-[40px] leading-[40px] font-bold">
                  Reliable
                </p>
                <p className="mb-3 text-xl md:text-[32px] leading-[30px] md:leading-[45px]">
                  Our solutions are designed for dependability, ensuring you
                  have robust support and consistent performance.
                </p>
              </div>
              <img
                src="/images/about-4.png"
                alt="people"
                className="hidden md:block"
              />
              <img
                src="/images/about-4-m.png"
                alt="people"
                className="block md:hidden"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-9 items-center justify-center mb-[51px] md:mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-start gap-6 order-1 md:order-2">
                <p className="text-[32px] leading-[54px] md:text-5xl">
                  Innovative
                </p>
                <p className="text-xl md:leading-[32px] md:text-2xl">
                  Creativity and innovation are at the heart of everything we
                  do, pushing boundaries to deliver exceptional results.
                </p>
              </div>
              <div className="md:block hidden w-full md:w-1/2 order-2 md:order-1">
                <img src="/images/about-5.png" alt="A man" />
              </div>
              <div className="block md:hidden w-full md:w-1/2 order-2 md:order-1">
                <img src="/images/about-5-m.png" alt="A man" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-9 items-center justify-center mb-[51px] md:mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-start gap-6">
                <p className="text-[32px] leading-[54px] md:text-5xl">
                  User-Centic
                </p>
                <p className="text-xl md:leading-[32px] md:text-2xl">
                  We focus on creating user-friendly systems that enhance user
                  engagement and simplify operations.
                </p>
              </div>
              <div className="md:block hidden w-full md:w-1/2 ">
                <img src="/images/about-6.png" alt="A man" />
              </div>
              <div className="block md:hidden w-full md:w-1/2 ">
                <img src="/images/about-6-m.png" alt="A man" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-9 items-center justify-center mb-[72px] md:mb-[140px]">
              <div className="w-full md:w-1/2 flex flex-col justify-start gap-6 order-1 md:order-2">
                <p className="text-[32px] leading-[54px] md:text-5xl">
                  Sustainable
                </p>
                <p className="text-xl md:leading-[32px] md:text-2xl">
                  Our solutions are built to last, focusing on sustainability
                  not only in design but also through support and scalability.
                </p>
              </div>
              <div className="md:block hidden w-full md:w-1/2 order-2 md:order-1">
                <img src="/images/about-7.png" alt="A man" />
              </div>
              <div className="block md:hidden w-full md:w-1/2 order-2 md:order-1">
                <img src="/images/about-7-m.png" alt="A man" />
              </div>
            </div>
            <div>
              <p className="mb-6 text-[32px] leading-[54px] md:text-8xl md:leading-[100px]">
                Commitment to Sustainability
              </p>
              <p className="mb-6 md:mb-[55px] text-xl leading-[30px] md:text-[32px] md:leading-[46px]">
                At Pink Power Ventures, sustainability means more than just
                eco-friendly practices. It involves creating IT solutions that
                are sustainable in terms of long-term usability, maintenance,
                and scalability. Our commitment is to provide technology that
                grows with your business.
              </p>
              <button
                className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs gradient-button transition-all ease-in-out"
                onClick={() => naviagate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.section>
  );
};

export default About;
