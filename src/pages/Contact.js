import React, { useState } from "react";
import Footer from "../components/Footer";
import { countries } from "../helpers/newCountries";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const containerVariants = {
  hidden: {
    x: "-100vh",
  },
  visible: {
    x: "0vh",
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const Contact = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [age, setAge] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <NavBar />
      <div className="pt-[95px] md:pt-0">
        <div className="flex justify-center pt-14 md:pt-[120px] mb-[87px]">
          <div className="w-full p-6 md:p-0 md:w-3/5">
            <p className="mb-[28px] text-xs">#1 Support in software</p>
            <p className="text-[32px] md:text-[64px] leading-[35px] md:leading-[66px] mb-9">
              Hello! <br></br>How can we help?
            </p>
            <form
            // action="https://formsubmit.co/oderindee25@gmail.com"
            // method="POST"
            >
              <div className="mb-3">
                <input
                  type="text"
                  className="w-full bg-[#161616] rounded-md px-2.5 py-4 placeholder:text-white placeholder:text-xs outline-none focus:ring-0 focus:ring-transparent"
                  placeholder="Firstname"
                  name="Firstname"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="w-full bg-[#161616] rounded-md px-2.5 py-4 placeholder:text-white placeholder:text-xs outline-none focus:ring-0 focus:ring-transparent"
                  placeholder="Lastname"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="w-full bg-[#161616] rounded-md px-2.5 py-4 placeholder:text-white placeholder:text-xs outline-none focus:ring-0 focus:ring-transparent"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-3">
                <div className="w-full relative">
                  <img
                    src="/images/select-icon.svg"
                    className="absolute right-[3rem] bottom-[0.7rem]"
                    alt="icon"
                  />
                  <select className="w-full bg-[#161616] rounded-md h-12 px-2.5 py-4 text-white text-xs outline-none focus:ring-0 focus:ring-transparent">
                    <option>🇺🇸 Country/City</option>
                    {countries?.map((country) => (
                      <option value={country?.name} data-flag={country?.emoji}>
                        {`${country?.emoji} ${country?.name}`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <select className="w-full bg-[#161616] rounded-md h-12  px-2.5 py-4 text-white text-xs outline-none focus:ring-0 focus:ring-transparent">
                  <option>Select Service</option>
                  <option>Animation</option>
                </select>
              </div>

              <div className="mb-6">
                <textarea
                  className="w-full bg-[#161616] rounded-md px-2.5 py-4 placeholder:text-white placeholder:text-xs outline-none focus:ring-0 focus:ring-transparent"
                  placeholder="Type message"
                  rows={6}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start md:items-center gap-4 ">
                <div className="">
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="fileInput"
                    className="font-mont bg-transparent border border-white rounded-[40px] py-[13px] px-[30px] text-xs flex gap-2 items-center cursor-pointer gradient-button2 transition-all ease-in-out"
                  >
                    <img src="/images/file.svg" alt="icon" /> Attach File
                  </label>
                </div>

                {/* <button className="font-mont bg-transparent border border-white rounded-[40px] py-[13px] px-[30px] text-xs flex gap-2 items-center">
                <img src="/images/file.svg" alt="icon" /> Attach File
              </button> */}
                <button className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs gradient-button transition-all ease-in-out">
                  Send Us a Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </motion.section>
  );
};

export default Contact;
