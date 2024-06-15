import React from "react";
import ServicesCards from "../components/ServicesCards";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <section className="flex justify-center">
      <div className="">
        <div className="md:h-screen bg-service-pattern bg-cover bg-no-repeat flex justify-center mb-8">
          <div className="w-full p-6 md:p-0 md:w-3/4 pt-10 md:pt-[95px]">
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
    </section>
  );
};

export default Services;
