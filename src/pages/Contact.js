import React, { useState } from "react";
import Footer from "../components/Footer";
import { countries } from "../helpers/newCountries";

const Contact = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <section className="">
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
              <select className="w-full bg-[#161616] rounded-md h-12 px-2.5 py-4 text-white text-xs outline-none focus:ring-0 focus:ring-transparent">
                <option>Country/City</option>
                {countries?.map((country) => (
                  <option value={country?.name}>{country?.name}</option>
                ))}
              </select>
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
            <div className="flex flex-col sm:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="fileInput"
                  className="font-mont bg-transparent border border-white rounded-[40px] py-[13px] px-[30px] text-xs flex gap-2 items-center cursor-pointer"
                >
                  <img src="/images/file.svg" alt="icon" /> Attach File
                </label>
              </div>
              {/* <button className="font-mont bg-transparent border border-white rounded-[40px] py-[13px] px-[30px] text-xs flex gap-2 items-center">
                <img src="/images/file.svg" alt="icon" /> Attach File
              </button> */}
              <button className="font-mont bg-[#EF1A98] rounded-[40px] py-[13px] px-[30px] text-xs">
                Send Us a Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
