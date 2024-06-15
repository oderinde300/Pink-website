import React from "react";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <section>
      <div className="flex justify-center">
        <div className="w-full flex flex-col items-center">
          <div className="w-3/4">
            <div className="mt-[54px] md:mt-[120px]">
              <div className="mb-[59px] md:mb-[91px]">
                <p className="text-[32px] leading-[54px] md:text-8xl md:leading-[100px] mb-3">
                  Our Portfolio
                </p>
                <p className="max-w-[656px] text-xl leading-[30px] md:text-2xl md:leading-[46px]">
                  From strategic planning to flawless execution, our
                  comprehensive services ensure your digital presence is not
                  just seen but felt and valued.
                </p>
              </div>
              <div className="hidden md:flex flex-col gap-10">
                {[1, 2, 3, 4, 5].map((index) => (
                  <img
                    src={`/images/portfolio-${index}.png`}
                    alt="dinosaur"
                    className="w-full object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col md:hidden gap-6">
                {[1, 2, 3, 4, 5].map((index) => (
                  <img
                    src={`/images/p-mobile-${index}.png`}
                    alt="dinosaur"
                    className="w-full object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Portfolio;
