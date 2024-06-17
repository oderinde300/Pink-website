import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "-100vh",
  },
  visible: {
    x: "0vh",
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const FinancialSolutions = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-finance-pattern bg-contain bg-no-repeat flex justify-center">
        <div className="w-full md:w-3/4 p-4 md:p-0">
          <p className="text-[32px] leading-[40px] md:text-8xl md:leading-[100px] pt-[75px]">
            Empowering Your Digital Transformation With{" "}
            <span className="bg-[#EF1A98]">Flexible</span> Financing
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center pt-8">
          <div className="w-full md:w-3/4 p-4 md:p-0">
            <p className="text-[32px] leading-[36px] md:text-[64px] md:leading-[80px] text-[#EF1A98] font-bold border-b border-white">
              Financing
            </p>
            <p className="text-[32px] leading-[36px] md:text-[64px] md:leading-[80px] text-[#EF1A98] font-bold  mb-6">
              Options
            </p>
            <div className="flex flex-col md:flex-row items-start gap-4 mb-[30px] md:mb-[173px]">
              <div className="flex flex-col gap-6">
                <p className="w-3/5 md:w-full border-b border-white text-2xl leading-[32px] font-bold">
                  Initial Payment Plan
                </p>
                <ul className="list-disc">
                  <li className="">
                    Start your project with just 15% down payment and spread the
                    remainder over time.
                  </li>
                  <li>
                    Enjoy interest-free repayments up to 60 months, to
                    accommodate various budget sizes and financial conditions.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <p className="w-3/5 md:w-full border-b border-white text-2xl leading-[32px] font-bold">
                  Custom Payment Schedules
                </p>
                <ul className="list-disc">
                  <li className="">
                    Tailor your payment plan according to your project’s
                    milestones and your company’s financial calendar.
                  </li>
                  <li>
                    We Offer payment schedules which can be adjusted based on
                    your seasonal cash flow or specific business cycles
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <p className="w-3/5 md:w-full border-b border-white text-2xl leading-[32px] font-bold">
                  Deferred Payment Options
                </p>
                <ul className="list-disc">
                  <li className="">
                    Defer payments until after your software solution is
                    operational and begins to generate ROI.
                  </li>
                  <li>
                    This option allows businesses to manage cash flow more
                    effectively by aligning payments with revenue increases.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-[30px] md:mb-[111px]">
                <div className="flex items-end">
                  <p className="w-2/5 text-[32px] leading-[32px] md:text-[64px] md:leading-[64px]">
                    Benefits of
                  </p>
                  <div className="w-3/5 border-b border-white"></div>
                </div>

                <p className="text-[32px] leading-[32px] md:text-[64px] md:leading-[64px]">
                  Financing Models
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-[87px]">
                <div className="flex flex-col gap-10 order-2 lg:order-1">
                  <div className="flex gap-4">
                    <p className="text-[100px] leading-[110px]">01</p>
                    <div className="flex flex-col">
                      <p className="text-2xl leading-[30px] font-bold">
                        Reduce Initial{" "}
                        <span className="text-[#EF1A98]">Financial</span> Burden
                      </p>
                      <p className="text-base">
                        Spread out your investment over time, easing the initial
                        financial burden and preserving capital for other
                        critical business needs
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <p className="text-[100px] leading-[110px] order-2 md:order-1">
                      02
                    </p>
                    <div className="flex flex-col order-1 md:order-2">
                      <p className="text-2xl leading-[30px] font-bold">
                        Align Costs with{" "}
                        <span className="text-[#EF1A98]">Benefits</span>
                      </p>
                      <p className="text-base">
                        Align your expenditure on digital tools with the
                        benefits they generate, such as increased revenues or
                        cost savings, thereby improving your cash flow
                        management
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <p className="text-[100px] leading-[110px]">03</p>
                    <div className="flex flex-col">
                      <p className="text-2xl leading-[30px] font-bold">
                        Enable{" "}
                        <span className="text-[#EF1A98]">Scalability</span> and
                        Growth
                      </p>
                      <p className="text-base">
                        Take advantage of our scalable solutions without large
                        upfront costs, allowing your business to grow and adapt
                        more quickly to market demands
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="/images/finance-1.png"
                  alt="calculator"
                  className="hidden lg:block order-1 md:order-2"
                />
                <img
                  src="/images/finance-2.png"
                  alt="calculator"
                  className="block lg:hidden order-1 md:order-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default FinancialSolutions;
