import React, { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: "0vh",
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const RepaymentCalculator = () => {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState("");
  const [months, setMonths] = useState("");
  const [initialCommitment, setInitialCommitment] = useState("");
  const [breakdown, setBreakdown] = useState("");

  const handleBreakdown = (e) => {
    e.preventDefault();
    if (totalAmount && months && initialCommitment) {
      const percentInitialCommitment = totalAmount * (initialCommitment / 100);
      const value = (totalAmount - percentInitialCommitment) / months;
      setBreakdown(value.toFixed(2));
      localStorage.setItem("months", months);
      localStorage.setItem("initialCommitment", initialCommitment);
      localStorage.setItem("totalAmount", totalAmount);
      localStorage.setItem("breakdown", value.toFixed(2));
      setTimeout(() => {
        navigate("/repayment-breakdown");
      }, 1000);
    }
  };
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-center pt-[67px]">
        <div className="w-full md:w-3/4 p-4 md:p-0">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div>
              <div className="md:w-full w-3/4 flex flex-col mb-12">
                <p className="text-[32px] md:text-[64px] leading-[34px] md:leading-[71px] mb-3">
                  Calculate your repayment cost effectively
                </p>
                <p className="text-2xl">
                  No fees, absolute free. In Just 1 minute
                </p>
              </div>
              <div className="bg-white py-[18px] flex justify-center">
                <form className="w-3/4" onSubmit={handleBreakdown}>
                  <div className="">
                    <label className="text-sm leading-[30px] mb-3 text-[#000000]">
                      Total Amount
                    </label>
                    <div class="flex">
                      <span className="inline-flex items-center px-3 text-sm text-white rounded-s-md bg-[#212021]">
                        RM
                      </span>
                      <input
                        type="text"
                        class="rounded-none rounded-e-md bg-[#161616] outline-none focus:ring-0 focus:ring-transparent block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-[#A2A2A2] placeholder:text-sm placholder:leading-[30px]"
                        placeholder="Please Enter Amount E.g 30,000"
                        value={totalAmount}
                        onChange={(e) => setTotalAmount(e.target.value)}
                      />
                    </div>
                    <input />
                  </div>
                  <div className="">
                    <label className="text-sm leading-[30px] mb-3 text-[#000000]">
                      Repayment Tenure
                    </label>
                    <div class="flex">
                      <span className="inline-flex items-center px-3 text-sm text-white rounded-s-md bg-[#212021]">
                        MTH
                      </span>
                      <input
                        type="number"
                        class="rounded-none rounded-e-md bg-[#161616] outline-none focus:ring-0 focus:ring-transparent block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-[#A2A2A2] placeholder:text-sm placholder:leading-[30px]"
                        placeholder="enter repayment tenure up to 60 months"
                        value={months}
                        onChange={(e) => setMonths(e.target.value)}
                      />
                    </div>
                    <input />
                  </div>
                  <div className="">
                    <label className="text-sm leading-[30px] mb-3 text-[#000000]">
                      Initial Commitment
                    </label>
                    <div class="flex">
                      <span className="inline-flex items-center px-3 text-sm text-white rounded-s-md bg-[#212021]">
                        %
                      </span>
                      <input
                        type="number"
                        class="rounded-none rounded-e-md bg-[#161616] outline-none focus:ring-0 focus:ring-transparent block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-[#A2A2A2] placeholder:text-sm placholder:leading-[30px]"
                        placeholder="Fixed Initial Commitment (15%)"
                        value={initialCommitment}
                        onChange={(e) => setInitialCommitment(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-3">
                    <button
                      disabled={!initialCommitment || !months || !totalAmount}
                      className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs disabled:cursor-not-allowed"
                    >
                      Calculate Monthly Repayment
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <img
              src="/images/calculator-1.png"
              alt="A man"
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default RepaymentCalculator;
