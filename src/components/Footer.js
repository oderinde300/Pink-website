import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLink = [
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
  ];
  return (
    <section className="flex justify-center text-white pt-9">
      <div className="w-full px-6 md:px-0 md:w-3/4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center mb-14">
          <img src="/images/footer-logo.svg" alt="logo" />
          <div className="flex flex-col md:flex-row justify-start gap-6">
            <div>
              <p className="text-lg font-semibold mb-4">Contact</p>
              <ul className="flex flex-col gap-2 cursor-pointer text-[#B3B3B2]">
                <li>
                  <Link to="mailto:">pink@gmail.com</Link>
                </li>
                <li>
                  <Link to="mailto:">+24 676 778 55</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-semibold mb-4">Resources</p>
              <ul className="flex flex-col gap-2 cursor-pointer text-[#B3B3B2]">
                {footerLink?.map((link, index) => (
                  <li key={index}>
                    <Link to={link?.path}>{link?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-sm pt-9 pb-2 border-t border-[#B3B3B2] text-[#B3B3B2]">
          © 2024 Pink Power Ventures. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
