import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Content />
      <div className="flex justify-center">
        <div className="w-full md:w-3/4 p-4 md:p-0 pt-10">
          <img
            src="/images/home-2.svg"
            alt="science"
            className="w-full object-cover"
          />
        </div>
      </div>
      <section className="bg-black md:py-[147px] py-[51px] flex justify-center text-white">
        <div className="w-full md:w-3/4 p-4 md:p-0">
          <p className="font-mont text-[32px] leading-[35px] md:text-[4rem] md:leading-[4rem] max-w-[443px] pb-[35px] md:pb-14 text-[#FEFEFE]">
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
              <p className="font-mont text-white md:text-black  text-[32px] leading-[35px] md:text-[64px] md:leading-[54px] max-w-[359px]">
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
                <p className="font-mont text-white text-2xl">
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
              <p className="font-mont text-white text-2xl">
                Pay-for-what-you-use features, ensuring you don’t overspend on
                unnecessary functionalities{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center mb-[58px] text-white">
        <div className="w-full md:w-3/4 p-4 md:p-0 ">
          <p className="font-mont flex justify-center items-center text-[32px] leading-[35px] md:text-[64px] md:leading-[54px] mb-10">
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
              <button className="font-mont border border-white rounded-[40px] py-[13px] px-[30px] text-xs">
                Start Your transformation journey
              </button>
              <button className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs">
                Explore Payment Options
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden md:flex justify-center text-white">
        <div className="w-3/4">
          <p className="text-base mb-[56px]">Our Services</p>
          <div className="flex flex-wrap gap-[22px] items-center mb-[38px]">
            <img src="/images/filled-star.svg" className="" alt="icon" />
            <p className="text-[54px] leading-[72px] ">
              Marketing and Branding
            </p>
          </div>
          <img src="/images/long-arrow.svg" className="" alt="arrow image" />
        </div>
      </section>

      <section className="flex justify-center text-white bg-con-m-pattern md:bg-con-pattern">
        <div className="w-full md:w-3/4 p-4 md:p-0 py-[54px] md:py-[122px]">
          <div className="flex flex-col gap-4 mb-6">
            <p className="text-[32px] leading-[35px] md:text-[64px] md:leading-[66px] w-full md:w-4/5">
              Concerned About High Costs of Digital Transformation?
            </p>
            <p className="text-xl w-full md:w-3/5">
              We understand that the upfront cost of digital innovation can
              bedaunting. Pink Power Ventures offers tailored software solutions
              with flexiblepayment plans to make digital transformation
              accessible for all businesses.
            </p>
          </div>
          <button className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs">
            Schedule a Consultation
          </button>
        </div>
      </section>
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
                src="/images/fire-carton.svg"
                alt="carton image"
                className=""
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <img
                src="/images/dinosaur.svg"
                alt="dinosaur image"
                className=""
              />
              <img src="/images/carton.svg" alt="carton image" className="" />
            </div>
          </div>
          <div className="w-full mx-auto flex justify-center items-center">
            <button className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;