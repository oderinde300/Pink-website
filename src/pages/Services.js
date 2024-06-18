import React from "react";
import ServicesCards from "../components/ServicesCards";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";

const containerVariants = {
  hidden: {
    x: "-100vh",
  },
  visible: {
    x: "0vh",
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const Services = () => {
  return (
    <motion.section
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services - Pink website</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NavBar />
      <div className="flex justify-center pt-[160px] md:pt-0">
        <div className="">
          <div className="md:h-screen bg-service-pattern bg-cover bg-no-repeat flex justify-center mb-8">
            <div className="w-full p-6 md:p-0 md:w-3/4 md:pt-[95px]">
              <p className="text-[40px] leading-[45px] md:text-8xl md:leading-[100px] mb-6">
                Tailored Services to Amplify Your Digital Influence.
              </p>
              <p className="text-xl md:text-[32px] md:leading-[45px]">
                From strategic planning to flawless execution, our comprehensive
                services ensure your digital presence is not just seen but felt
                and valued.
              </p>
            </div>
          </div>
          <ServicesCards />
          <Footer />
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
