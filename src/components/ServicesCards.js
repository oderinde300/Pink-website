import React from "react";

const ServicesCards = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-6 md:p-0 md:w-3/4">
        <div className="mb-20 md:mb-[151px]">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <img
              src="/images/service-vertical-line.svg"
              alt="service"
              className="hidden md:flex justify-center items-center"
            />
            <img
              src="/images/service-1.png"
              alt="service"
              className="hidden md:block w-full md:w-2/5"
            />
            <div className="w-full md:3/5 flex flex-col gap-[33px]">
              <p className="text-2xl md:text-5xl">
                Digital Strategy and Innovation
              </p>
              <ul>
                <li className="text-xl leading-[35px] md:text-2xl list-disc">
                  Digital Strategy Development: Crafting strategies for digital
                  growth.
                </li>
                <li className="text-xl leading-[35px] md:text-2xl list-disc">
                  Digital Strategy Advisory: Consultative services to enhance
                  digital marketing strategies.
                </li>
                <li className="text-xl leading-[35px] md:text-2xl list-disc">
                  AI Integration: Using AI to optimize digital content and user
                  interactions.
                </li>
              </ul>
            </div>
            <div className="block md:hidden">
              <div className="flex items-center gap-4 border-b-2  border-white pb-4">
                <img
                  src="/images/service-vertical-line.svg"
                  alt="service"
                  className=""
                />
                <img src="/images/service-1.png" alt="service" className="" />
              </div>
              <div className="w-1/2 border-b-2 border-white pt-4"></div>
            </div>
          </div>
          <img
            src="/images/service-underline.svg"
            alt="service"
            className="hidden md:flex justify-center items-center mt-6"
          />
        </div>
        <div className="mb-20 md:mb-[151px]">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <img
              src="/images/service-vertical-line.svg"
              alt="service"
              className="hidden md:flex justify-center items-center"
            />

            <div className="w-full md:3/5 flex flex-col gap-[33px]">
              <p className="text-2xl md:text-5xl">
                Software and Application Development
              </p>
              <ul>
                <li className="text-xl leading-[35px] md:text-2xl list-disc">
                  Mobile and Web Application Development: Tailored solutions for
                  iOS, Android, and web platforms.
                </li>
                <li className="text-xl leading-[35px] md:text-2xl list-disc">
                  UX/UI Design: Designing intuitive and impactful user
                  experiences
                </li>
              </ul>
            </div>

            <img
              src="/images/service-2.png"
              alt="service"
              className="hidden md:block w-full md:w-2/5"
            />

            <div className="block md:hidden">
              <div className="flex items-center gap-4 border-b-2  border-white pb-4">
                <img
                  src="/images/service-vertical-line.svg"
                  alt="service"
                  className=""
                />
                <img src="/images/service-2.png" alt="service" className="" />
              </div>
              <div className="w-1/2 border-b-2 border-white pt-4"></div>
            </div>
          </div>
          <img
            src="/images/service-underline.svg"
            alt="service"
            className="hidden md:flex justify-center items-center mt-6"
          />
        </div>
        <div className="mb-20 md:mb-[151px]">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <img
              src="/images/service-vertical-line.svg"
              alt="service"
              className="hidden md:flex justify-center items-center"
            />
            <img
              src="/images/service-3.png"
              alt="service"
              className="hidden md:block w-full md:w-2/5 "
            />
            <div className="w-full md:3/5 flex flex-col gap-[33px]">
              <p className="text-2xl md:text-5xl">
                Creative and Multimedia Solutions
              </p>
              <ul>
                <li className="text-xl leading-[35px] md:text-2xl list-disc">
                  Graphic Design and Branding: From logos to complete brand
                  identities.
                </li>
                <li className="text-xl leading-[35px] md:text-2xl list-disc">
                  Video Production: Creating engaging video content for
                  marketing.
                </li>
              </ul>
            </div>

            <div className="block md:hidden">
              <div className="flex items-center gap-4 border-b-2  border-white pb-4">
                <img
                  src="/images/service-vertical-line.svg"
                  alt="service"
                  className=""
                />
                <img src="/images/service-3.png" alt="service" className="" />
              </div>
              <div className="w-1/2 border-b-2 border-white pt-4"></div>
            </div>
          </div>
          <img
            src="/images/service-underline.svg"
            alt="service"
            className="hidden md:flex justify-center items-center mt-6"
          />
        </div>
        <div className="mb-20 md:mb-[151px]">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <img
              src="/images/service-vertical-line.svg"
              alt="service"
              className="hidden md:flex justify-center items-center"
            />

            <div className="w-full md:3/5 flex flex-col gap-[33px]">
              <p className="text-2xl md:text-5xl">Marketing and Branding</p>
              <ul>
                <li className="text-xl leading-[35px] md:text-2xl list-disc">
                  Influencer Marketing: Connecting influencers with brands for
                  mutual growth.
                </li>
                <li className="text-xl leading-[35px] md:text-2xl list-disc">
                  Digital Advertising: Strategizing and executing ad campaigns.
                </li>
              </ul>
            </div>
            <img
              src="/images/service-4.png"
              alt="service"
              className="hidden md:block w-full md:w-2/5"
            />
            <div className="block md:hidden">
              <div className="flex items-center gap-4 border-b-2  border-white pb-4">
                <img
                  src="/images/service-vertical-line.svg"
                  alt="service"
                  className=""
                />
                <img src="/images/service-4.png" alt="service" className="" />
              </div>
              <div className="w-1/2 border-b-2 border-white pt-4"></div>
            </div>
          </div>
          <img
            src="/images/service-underline.svg"
            alt="service"
            className="hidden md:flex justify-center items-center mt-6"
          />
        </div>
        <div className="mb-20 md:mb-[151px]">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <img
              src="/images/service-vertical-line.svg"
              alt="service"
              className="hidden md:flex justify-center items-center"
            />
            <img
              src="/images/service-5.png"
              alt="service"
              className="hidden md:block w-full md:w-2/5"
            />
            <div className="w-full md:3/5 flex flex-col gap-[33px]">
              <p className="text-2xl md:text-5xl">
                Financial and Fundraising Strategies
              </p>
              <ul>
                <li className="text-xl leading-[35px] md:text-2xl list-disc">
                  Financial Projections: Detailed forecasting and valuation
                </li>
                <li className="text-xl leading-[35px] md:text-2xl list-disc">
                  Fundraising Support: Assistance with investor relations and
                  funding pitches
                </li>
              </ul>
            </div>

            <div className="block md:hidden">
              <div className="flex items-center gap-4 border-b-2  border-white pb-4">
                <img
                  src="/images/service-vertical-line.svg"
                  alt="service"
                  className=""
                />
                <img src="/images/service-5.png" alt="service" className="" />
              </div>
              <div className="w-1/2 border-b-2 border-white pt-4"></div>
            </div>
          </div>
          <img
            src="/images/service-underline.svg"
            alt="service"
            className="hidden md:flex justify-center items-center mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
