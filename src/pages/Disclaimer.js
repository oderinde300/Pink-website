import React from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";

const containerVariants = {
  hidden: {
    x: "100vh",
  },
  visible: {
    x: "0vh",
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const Disclaimer = () => {
  const naviagate = useNavigate();
  return (
    <motion.section
      className="text-white "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Disclaimer | Pink Power Ventures</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <NavBar />
      <div className="pt-[160px] md:pt-[120px]">
        <div className="flex justify-center mb-[58px] md:mb-[121px]">
          <div className="w-full px-6 md:px-0 md:w-3/4">
            <p className="text-center mb-8 text-[32px] leading-[54px] md:text-8xl md:leading-[100px]">
              Disclaimer
            </p>
            <div className="mb-12">
              <p className="text-2xl leading-[30px] md:text-[40px] md:leading-[46px] mb-4">
                General Information
              </p>
              <p className="text-xl leading-[30px] md:text-[32px] md:leading-[46px]">
                The information on the Pink Power Ventures Sdn. Bhd. website,
                accessible from http://www.pinkpower.vc/, is provided for
                general informational purposes only. Pink Power Ventures makes
                every effort to ensure the accuracy and reliability of the
                information, however, we make no guarantees regarding its
                completeness, accuracy, or suitability for any particular
                purpose. Al users agree that all access and use of this website
                and on any website linked from this site a n d the content
                thereof is at their own risk.
              </p>
            </div>
            <div className="mb-12">
              <p className="text-2xl leading-[30px] md:text-[40px] md:leading-[46px] mb-4">
                Limitation of Liability
              </p>
              <p className="text-xl leading-[30px] md:text-[32px] md:leading-[46px]">
                Neither Pink Power Ventures nor any of its agents or contractors
                shall be liable for any direct, indirect, special, incidental,
                consequential, punitive, or exemplary damages arising out of or
                in connection with the use of this website o r any linked
                website. This limitation includes damages for loss of profits,
                business interruption, loss of information, or any other loss.
              </p>
            </div>
            <div className="mb-12">
              <p className="text-2xl leading-[30px] md:text-[40px] md:leading-[46px] mb-4">
                Copyright Notice
              </p>
              <p className="text-xl leading-[30px] md:text-[32px] md:leading-[46px]">
                Copyright © 2024 Pink Power Ventures Sdn. Bhd. Al rights
                reserved. Content on this website is protected by copyright laws
                and is intended solely for the personal and non-commercial use
                of our website users. Reproduction, passing off, distribution,
                or transmission of content from this website without prior
                written permission is strictly prohibited.
              </p>
            </div>
            <div className="mb-12">
              <p className="text-2xl leading-[30px] md:text-[40px] md:leading-[46px] mb-4">
                External Links
              </p>
              <p className="text-xl leading-[30px] md:text-[32px] md:leading-[46px]">
                This website may contain links to external websites that are not
                provided or maintained by or in any way affiliated with Pink
                Power Ventures. Please note that Pink Power Ventures does not
                guarantee the accuracy, relevance, timeliness, or completeness
                of any information on these external websites.
              </p>
            </div>
            <div className="mb-12">
              <p className="text-2xl leading-[30px] md:text-[40px] md:leading-[46px] mb-4">
                No Professional Advice
              </p>
              <p className="text-xl leading-[30px] md:text-[32px] md:leading-[46px]">
                The information provided on this website does not constitute
                legal, financial, consulting, or professional advice of any
                kind. If you require advice in relation to any legal, financial,
                or professional matter, you should consult an appropriate
                professional.
              </p>
            </div>
            <div className="mb-12">
              <p className="text-2xl leading-[30px] md:text-[40px] md:leading-[46px] mb-4">
                Modification of Terms
              </p>
              <p className="text-xl leading-[30px] md:text-[32px] md:leading-[46px]">
                Pink Power Ventures reserves the right to change the terms,
                conditions, and notices under which this website is offered
                without prior notice. Al changes are effective immediately and
                your continued use of the website signifies your acceptance of
                any modified terms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.section>
  );
};

export default Disclaimer;
